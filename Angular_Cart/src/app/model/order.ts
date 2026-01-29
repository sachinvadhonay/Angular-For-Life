export interface Order {
  SaleId: number;
  CustId: number;
  SaleDate: string;
  TotalInvoiceAmount: number;
  Discount: number;
  PaymentNaration: string;
  DeliveryAddress1: string;
  DeliveryAddress2: string;
  DeliveryCity: string;
  DeliveryPinCode: string;
  DeliveryLandMark: string;
  IsCanceled: boolean;
}
