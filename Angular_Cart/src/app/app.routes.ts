import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateorderComponent } from './pages/createorder/createorder.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guard/auth.guard';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },

    {

        path:'login',
        component:LoginComponent
    },

    {
        path:"signup",
        component:SignupComponent
    },

    {
        path:"home",
        component:ProductsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [authGuard]
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    }
     
];
