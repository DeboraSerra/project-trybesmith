import { Order } from '../interfaces/interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';

class OrderService {
  private model: OrderModel;

  private productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    const prodIds = await Promise.all(orders.map((order: Order) => {
      const ids = this.productModel.findOrderById(order.id);
      return ids;
    }));
    orders.forEach((_order, index) => { orders[index].productsIds = prodIds[index]; });
    return orders;
  };
}

export default OrderService;
