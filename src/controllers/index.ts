import { rootController } from './root.controller';
import { newProduct, updateProduct, deleteProduct, getAllProducts } from './product.controller';

export default {
    rootController,
    productController: {
        new: newProduct,
        update: updateProduct,
        delete: deleteProduct,
        getAll: getAllProducts
    }
};