import { Router } from 'express';
import { paths } from './utils/paths';
import controllers from './controllers';
import { authMiddleware } from './middlewares';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
const router: Router = Router();

// root
router.get(paths.ROOT, controllers.rootController);

// product
router.post(paths.PRODUCT, authMiddleware , controllers.productController.new);
router.get(paths.PRODUCT, authMiddleware , controllers.productController.getAll);
router.put(paths.PRODUCTID, authMiddleware, controllers.productController.update);
router.delete(paths.PRODUCTID, authMiddleware, controllers.productController.delete);

// api docs
router.use(paths.DOCS, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export {router};