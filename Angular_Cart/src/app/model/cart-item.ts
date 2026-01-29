export interface CartItem {
  cartId: number;
  custId: number;
  productId: number;
  quantity: number;
  addedDate: string;

  productName: string;
  productShortName: string;
  categoryName: string;
  productImageUrl: string;
  productPrice: number;
}
