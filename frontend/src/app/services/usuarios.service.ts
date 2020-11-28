import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http:HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3050/api/users');
  }
  saveUser(data:any): Observable<any>{
    return this.http.post('http://localhost:3050/api/add',data)
  }
  updateUser(data:any): Observable<any>{
    return this.http.put(`http://localhost:3050/api/update/${data.id}`,data)
  }
  deleteUser(data:any): Observable<any>{
    return this.http.delete(`http://localhost:3050/api/delete/${data.id}`,data)
  }
  
}
