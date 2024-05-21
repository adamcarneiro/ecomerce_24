import { OrderItem } from "./order-item.model";

export interface Order {
  id: number;
  customerId: number;
  orderDate: Date;
  status: string;
  totalAmount: number;
  // items: OrderItem[];
  items: any[];
}
