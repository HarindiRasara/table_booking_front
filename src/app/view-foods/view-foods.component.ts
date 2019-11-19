import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from './../services/menu.service';
import { menus } from './../models/menues';
import { Menu } from '../menu';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styleUrls: ['./view-foods.component.css'],
  providers:[AuthService]
})
export class ViewFoodsComponent implements OnInit {
  public menu:Menu [];
  public menus;


  constructor( private authService: AuthService,private menuService:MenuService,private location: Location,private router : Router ){}

  ngOnInit() {
    this.menuService
    .displayitems()
      .subscribe((res)=>{
        this.menus = res.json();
        console.log('response is',this.menus);
      },(error) =>{
        console.log('error is',error)
      });
  }

  edititem(menu){

    this.menuService.setter(menu);
    this.router.navigate(['edititem']);

  }

  removeitem (_id){

    console.log(_id);
    //console.log(typeof _id);
    this.menuService.removeitem(_id)
    .subscribe(res=>{
      console.log(res);
      window. location.reload();
    })

  }


}
