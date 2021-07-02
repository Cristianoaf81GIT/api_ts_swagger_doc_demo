declare namespace Express {
    import('../src/entities/product.entity');// nao remover, necessário
    import {Product} from '../src/entities/product.entity';
    export interface Request {
        db?: Array<Product>
        user?: any 
    }
}