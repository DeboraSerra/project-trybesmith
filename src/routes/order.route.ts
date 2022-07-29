import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import tokenMiddleware from '../middlewares/token.middleware';

const router = Router();

const controller = new OrderController();

router.route('/')
  .get(controller.getAll)
  .post(tokenMiddleware, controller.create);

export default router;
