import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from './../services/menu.service';
import {Table} from '../table';

@Component({
  selector: 'app-cus-table',
  templateUrl: './cus-table.component.html',
  styleUrls: ['./cus-table.component.css']
})
export class CusTableComponent implements OnInit {
  public table:Table [];
  public tables;
  constructor( private authService: AuthService, private menuService: MenuService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.authService
    .displayTables()
       .subscribe((res) => {
        this.tables = res.json();
      console.log('response is ', this.tables);

  }, (error) => {
      console.log('error is ', error);
  } );
  }

}
