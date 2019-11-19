import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Menu} from '../menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'content-Type': 'application/json' });
  private option = new RequestOptions({ headers: this.headers });
  private menu:Menu;




  displayitems() {
    return this.http.get(`http://localhost:3000/api/menu`);
  }


  removeitem(_id){
    return this.http.delete(`http://localhost:3000/api/menu/${_id}`)
  }

  additem(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/menu',data,{
      headers:this.headers
    })
  }

  updateitem(menu:Menu){
    return this.http.put('http://localhost:3000/api/menu/update',menu,{headers:this.headers});
  }
  setter(menu:Menu){
    this.menu=menu;
  }

  getter(){
   return this.menu;
 }

 sendOrder(order){
  return this.http.post(`http://localhost:3000/api/order`,order)
 }


getRiders(){
  return this.http.get(`http://localhost:3000/api/riders`);
}

 addOrder(order){
  return this.http.post('http://localhost:3000/api/conformO',order)
}

displayorders() {
  return this.http.get(`http://localhost:3000/api/orders`);
}

}
