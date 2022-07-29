import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const controller = new ProductController();

router.route('/')
  .get(controller.getAll)
  .post(controller.create);

export default router;
