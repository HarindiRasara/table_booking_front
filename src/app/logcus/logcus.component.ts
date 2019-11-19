import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from './contatct';

@Component({
  selector: 'app-logcus',
  templateUrl: './logcus.component.html',
  styleUrls: ['./logcus.component.css']
})
export class LogcusComponent implements OnInit {
  invalidLogin: boolean;
  validLogin: boolean;

  constructor( private authService: AuthService,private router: Router ){}

  ngOnInit() {
  }

  // tslint:disable-next-line: member-ordering
  form = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      ])
  });

    logIn(credentials){
      // console.log(credentials);
      this.authService.logincus(credentials)
      .subscribe(result => {
        console.log(result.json());
        if(result.json().success){
          this.validLogin=true;
          this.router.navigate(['customerhome']);
        } else {
         this.invalidLogin= true;
        }
      } );

      }

}
