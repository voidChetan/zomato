import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { SelectFoodComponent } from './pages/select-food/select-food.component';

const routes: Routes = [
  {
    path:'',
    component:CategoriesComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'foodCategory',
    component: CategoriesComponent
  },
  {
    path:'restaurant-items/:categoryname',
    component: RestaurantItemsComponent
  },
  {
    path:'select-items/:restaurantId/:categoryId',
    component: SelectFoodComponent
  },
  {
    path:'create-order',
    component: CreateOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
