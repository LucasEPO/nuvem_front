import { CartItem } from "./cart-item.interface";
import { User } from "./user.interface";

export interface Cart {
  cart_id: string;
  user: User;
  cart_itens: CartItem[];
}