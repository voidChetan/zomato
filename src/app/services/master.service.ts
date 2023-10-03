import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MasterService {
 
  cartItems: any = {
    items: []
  };
  constructor(private http: HttpClient) { }

  getAllFoodCategory() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory");
  }

  getItemsByRestaBYCategoryName(name: string) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantServingByCategoryId?categoryId='+ name)
  }
  GetFoodItemOfRestaurantByCategory(restaurantID:number,categoryId: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory?restaurantId='+ restaurantID+'&categoryId='+categoryId)
  }
  

  GetAllCartItemsByCustomerId(customerId:number,restaurantID: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetCartItemsByCustomerIdForRestaurant?customerId='+ customerId+'&restaurantId='+restaurantID)
  }
  
  GetRestaurantByRestaurantId(name: number) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantByRestaurantId?restaurantID='+ name)
  }
  login( obj: any) {
   return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/Login",obj);
  }

  placeOrder(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/AddNewOrder", obj);
  }


  addToCart(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/AddToCart", obj);
  }
  UpdateCartQuantity(obj:any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/UpdateCartQuantity", obj);
  }
}
