import express from 'express';
import 'express-async-errors';

import productRoute from './routes/product.route';
import userRoute from './routes/user.route';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);

app.use(errorMiddleware);

export default app;
