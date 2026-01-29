import { Component,OnDestroy,OnInit,inject, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResposneModel,Category,ProductList} from '../../model/Product';
import { elementAt, map, Observable, Subscription } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit,OnDestroy {

 
productList = signal<ProductList[]>([]);

categoryList$ : Observable<Category[]> = new Observable<Category[]>();
subscriptionList : Subscription[]=[];

 masterService = inject(MasterService);
 private cartService = inject(CartService);

 ngOnInit(): void {
  this.loadAllProduct();
  this.categoryList$ = this.masterService.getAllCategory().pipe(
  map(item=> item.data)
)
}


getproductbycategory(id:number)
{
   this.masterService.getAllProductsByCategoryId(id).subscribe((res:APIResposneModel)=>{
        this.productList.set(res.data);
         })
}

loadAllProduct(){

  this.subscriptionList.push( this.masterService.getAllProducts().subscribe((res:APIResposneModel)=>{  
        this.productList.set(res.data);

  }))
}
ngOnDestroy(): void {
    this.subscriptionList.forEach(element => {
      element.unsubscribe();
    })
}

addToCart(productId:number):void{

const custId = Number(localStorage.getItem('custId'));
 const cartItem = {
    CartId: 0,
    CustId: custId,
    ProductId: productId,
    Quantity: 1,
    AddedDate: new Date().toISOString()
  };

  this.cartService.addtoCart(cartItem).subscribe(res=>{

     if (res.result) {

      const currentCount = Number(localStorage.getItem('cartCount') || 0);
      const newCount = currentCount + 1;

       
      this.cartService.updateCartCount(newCount);
      localStorage.setItem('cartCount', newCount.toString());

      alert('Added to cart');
    }
  });
}


}
