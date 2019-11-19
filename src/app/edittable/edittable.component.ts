import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import {Table} from './../table';



@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.css']
})
export class EdittableComponent implements OnInit {

  public table:  Table;


  constructor(private authService: AuthService,private router: Router) {


  }


  ngOnInit() {

    this.table = this. authService.getter();

  }
  updateTable(){
    this.authService.updateTable(this.table).subscribe(
      data=>{
        console.log(data);
      } ,
      error=>{
        console.log(error);
      }
    )
  }



}
