import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from './../services/menu.service';


@Component({
  selector: 'app-resturentowner',
  templateUrl: './resturentowner.component.html',
  styleUrls: ['./resturentowner.component.css'],
  providers:[AuthService]
})
export class ResturentownerComponent implements OnInit {
  public tables;
  public menus;

  constructor( private authService: AuthService,private menuService:MenuService,private location: Location,private router : Router ){}


  ngOnInit() {

  }

  createTable(){
  //  console.log("add");
    this.router.navigate(['createtable']);
  }

  additem(){
   // console.log("add");
    this.router.navigate(['additems']);
  }

}


