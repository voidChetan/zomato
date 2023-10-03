import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.css']
})
export class RestaurantItemsComponent {

  items: any[]= [];
  quantity: number = 0;
  orderObj: any = { 
      "orderId": 0,
      "userId": 0,
      "orderDate": new Date(),
      "totalAmount": 0,
      "restaurantId": 0,
      "orderNo": "string",
      "zomatoOrderItems": [
        
      ] 
  }
  selectedFoodItem: any;
  categoryId: number = 0
  constructor(private activate: ActivatedRoute,private router: Router, private master: MasterService) {
    this.activate.params.subscribe((res: any)=>{
      debugger;
      this.categoryId = res.categoryname;
      this.loadFoodItemsByCategory(res.categoryname)
    })
    const loggedData = localStorage.getItem('zomatoUser');
    if(loggedData != null) {
      const data = JSON.parse(loggedData);
      this.orderObj.userId = data.userId;
    }
  }

  loadFoodItemsByCategory(name: string) {
    this.master.getItemsByRestaBYCategoryName(name).subscribe((res: any)=>{
      this.items = res.data;
    })
  }
  openQtyModel(item: any) {
    debugger;
    const model = document.getElementById('myModal');
    if(model != null) {
      model.style.display = "block";
    }
    this.selectedFoodItem = item;
  }
  cloesQtyModel(item: any) {
    const model = document.getElementById('myModal');
    if(model != null) {
      model.style.display = "none";
    }
  }
  addToCart(data:any) {
    debugger;
    const itemObj = {
      "orderItemId": 0,
      "orderId": 0,
      "itemId": this.selectedFoodItem.itemID,
      "quantity":this.quantity
    };
    this.orderObj.restaurantId = this.selectedFoodItem.restaurantI;
    this.orderObj.zomatoOrderItems.push(itemObj);
    this.master.placeOrder(this.orderObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Order Placed')
      } else {
        alert(res.message)
      }
    })
  }

  navigate(item: any) {
    this.router.navigate(['/select-items',item.restaurantID,this.categoryId])
  }
}
