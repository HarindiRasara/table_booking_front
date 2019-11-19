import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ResturentownerComponent } from './resturentowner/resturentowner.component';
import { NavLogComponent } from './nav-log/nav-log.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { EdittableComponent } from './edittable/edittable.component';
import { AdditemsComponent } from './additems/additems.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { ViewTableComponent } from './view-table/view-table.component';
import { ViewFoodsComponent } from './view-foods/view-foods.component';
import { FooterComponent } from './footer/footer.component';
import { EdititemComponent } from './edititem/edititem.component';
import { CusNavComponent } from './cus-nav/cus-nav.component';
import { OrdersComponent } from './orders/orders.component';
import { CusTableComponent } from './cus-table/cus-table.component';
import { LogcusComponent } from './logcus/logcus.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    NavComponent,
    HomeComponent,
    CustomerHomeComponent,
    ResturentownerComponent,
    NavLogComponent,
    CreateTableComponent,
    EdittableComponent,
    AdditemsComponent,
    ViewTableComponent,
    ViewFoodsComponent,
    FooterComponent,
    EdititemComponent,
    CusNavComponent,
    OrdersComponent,
    CusTableComponent,
    LogcusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: "login", component: LogInComponent },
      { path: "home", component: HomeComponent },
      { path: "signup", component: SignUpComponent },
      { path: "customerhome", component: CustomerHomeComponent },
      { path :"resturentowner", component:ResturentownerComponent},
      { path : "createtable", component:CreateTableComponent},
      { path : "edittable", component:EdittableComponent},
      { path : "additems" , component:AdditemsComponent},
      { path : "viewFoods", component:ViewFoodsComponent},
      { path: "viewTable", component:ViewTableComponent},
      { path:"edititem", component:EdititemComponent},
      { path:"custable",component:CusTableComponent},
      { path: "orders",component:OrdersComponent },
      { path: "logincus", component:LogcusComponent}


    ]),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDkEMGWZog3d2PlCc0wJm5IA6aUYFu1ehs",
    authDomain: "imageupload-3a4b7.firebaseapp.com",
    databaseURL: "https://imageupload-3a4b7.firebaseio.com",
    projectId: "imageupload-3a4b7",
    storageBucket: "imageupload-3a4b7.appspot.com",
    messagingSenderId: "259249011310",
    appId: "1:259249011310:web:e42a4f7ffe9de89a8e847f",
    measurementId: "G-3806GEVSF3",

         }),
       AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
