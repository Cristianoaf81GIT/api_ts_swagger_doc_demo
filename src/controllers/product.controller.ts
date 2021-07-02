import { Request, Response } from 'express';
import { Product } from '../entities/product.entity';

export function newProduct(req: Request, res: Response): any {
    
    const { description, name, price } = req.body;
    
    const isProductAlreadyExists = req.db.filter(p => {
        if (
            p.productDescription === description &&
            p.productName === name
        ) {
            return p;
        } else {
            return null;
        }
    });
    
    if (isProductAlreadyExists.length > 0) {
        return res.status(400).json({
            status: 400, 
            message: 'product already exists, try update!'
        });
    }    
    const newProduct: Product = new Product(description,name,price);
    
    req.db.push(newProduct);
    
    res.json({
        status: 200, 
        message: 'product created', 
        product: newProduct
    });
}

export function updateProduct(req: Request, res:Response): any {
    const { description, name,  price } = req.body;
    const { id } = req.params;
    let product = req.db.find(element => {
        if(element.productId === id){
            return element
        }
    });
    
    if (!product) {
        return res.sendStatus(204);
    }

    product.setDescription(description ? description : product.productDescription);
    product.setName(name ? name : product.productName);
    product.setPrice(price ? price : product.productPrice);
    const index = req.db.indexOf(product);
    req.db[index] = product;
    
    res.json({
        status:200,
        message: 'product updated.',
        product
    });
}

export function deleteProduct(req: Request, res: Response): any {
    const { id } = req.params;
    
    if (!id) {
        return res.json({
            status: 400,
            message: 'bad request, param id is required and must be valid!',            
        });
    }
    let product = req.db.find(element => {
        if(element.productId === id){
            return element
        } else  {
            return undefined;
        }
    });
    
    if (!product) {
        return res.status(404).json({
            status: 404,
            message: 'the product with specified id was not found.'
        });
    }
    const index = req.db.indexOf(product);
    delete req.db[index];
    res.sendStatus(204);
}

export function getAllProducts(req: Request, res: Response): any {
    req.db = req.db.filter(elm => {
        if (elm && elm.productId ) {
            return elm;
        }
    });
    res.json({data: req.db});    
}