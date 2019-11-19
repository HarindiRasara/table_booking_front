import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms' ;
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Menu } from '../menu';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  public url;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL:Observable<String>
  menu: Menu;

  constructor(private afStorage: AngularFireStorage,private menuService:MenuService, private router : Router) { }

  ngOnInit() {

    this.menu = this. menuService.getter();

  }

  upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL=this.ref.getDownloadURL())
    )
    .subscribe(

    );
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.url = url;
          console.log(url)
        });
      })
    ).subscribe();
   }
   updateItem(){
    this.menuService.updateitem(this.menu).subscribe(
      data=>{
        console.log(data);
      } ,
      error=>{
        console.log(error);
      }
    )
  }







}


