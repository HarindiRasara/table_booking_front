import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from './../services/menu.service';
import {Table} from '../table';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {
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

  removeTable (_id) {

    console.log(_id);
    // console.log(typeof id);
    this.authService.removeTable(_id)
    .subscribe(res => {
      console.log(res);
      window.location.reload();
    } );

  }

  editTable(table) {

    this.authService.setter(table);
    this.router.navigate(['/edittable']);

  }


}


