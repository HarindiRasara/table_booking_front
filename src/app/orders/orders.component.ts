import { Component, OnInit } from '@angular/core';
import { MenuService } from './../services/menu.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  riders: any;
  orderitem: any;
  orderpersion : object[];
  riderName : any
  riderId : any
  total : any
  orderstatus:any

  marked: boolean = true;


  constructor( private menuService: MenuService) { }

  ngOnInit() {
    this.menuService
    .displayorders()
       .subscribe((res) => {
        this.orders = res.json();
      console.log('response is ', this.orders);

  }, (error) => {
      console.log('error is ', error);
  } );

  this.menuService
    .getRiders()
       .subscribe((res) => {
        this.riders = res.json();
      console.log('response is ', this.riders);

  }, (error) => {
      console.log('error is ', error);
  } );

  }

  conformorder(order){

    console.log(this.riderId)
    if(this.riderId === undefined){
      window.alert("please select rider")
    }

    var obj = {
      "name": order.customername,
      "address": order.deliveraddress,
      "telphoneno": order.telephone,
      "ridername": this.riderName,
      "riderid": this.riderId,
      "totalcost":this.total,
      "orderstatus":this.orderstatus,
    }

    this.menuService.addOrder(obj)
    .subscribe(response =>{
      window.alert("sucess")
    })

    console.log(obj)
    console.log(this.riderId)



  }

  public onChange(event): void {
    var res = event.target.value.split(",");
    console.log(res)
    this.riderId = res[0]
    this.riderName = res[1]

  }



  }





