import { Cart } from "./cart.interface";
import { Print } from "./print.interface";
import { Product } from "./product.interface";

export interface CartItem {
  cart_item_id: string;
  quantity?: number;
  print?: Print | null;
  product?: Product | null;
  cart: Cart;
}