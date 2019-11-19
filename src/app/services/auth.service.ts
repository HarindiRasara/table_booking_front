import { Table } from './../table';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  { Contact } from '../log-in/contatct';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private table:Table;
  constructor(private http: Http) { }
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});



  login(contact){
  let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.post('http://localhost:3000/api/login/',contact,{
      headers:this.headers
    });
  }

  logincus(contact){
    let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.post('http://localhost:3000/api/logincus/',contact,{
      headers:this.headers
    });
  }

  signUpCustomer(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/customers/',data,{
      headers:this.headers
    })
  }

  signUpRestOwner(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/restaurentowners',data,{
      headers:this.headers
    })
  }

  displayTables(){
    return this.http.get(`http://localhost:3000/api/tables`);
  }


  removeTable(_id){
    return this.http.delete(`http://localhost:3000/api/tables/${_id}`)
  }

  addtable(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/tables',data,{
      headers:this.headers
    })
  }

  updateTable(table:Table){
    return this.http.put('http://localhost:3000/api/tables/update',table,{headers:this.headers});
  }


 setter(table:Table){
   this.table=table;
 }

 getter(){
  return this.table;
}
}
