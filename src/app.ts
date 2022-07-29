import express from 'express';
import 'express-async-errors';

import productRoute from './routes/product.route';
import userRoute from './routes/user.route';
import orderRoute from './routes/order.route';
import loginRoute from './routes/login.route';

import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/orders', orderRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);

app.use(errorMiddleware);

export default app;
