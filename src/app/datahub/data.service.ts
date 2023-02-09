import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url ="http://localhost:3000/posts";
  constructor(private http: HttpClient) { }

  //Get All Data From DataBase

  getData(){
   return this.http.get<Data[]>("http://localhost:3000/posts");
  }

  //Create Data
  createData(data: Data){
    return this.http.post<Data[]>( "http://localhost:3000/posts", data)
    }

     //Get data by id
  getDataById(id:number){
    return this.http.get<Data>(`http://localhost:3000/posts/${id}`)
  }

  //Update Data
  UpdateData(data:Data){
    return this.http.put<Data>(`http://localhost:3000/posts/${data.id}`, data)
  }

  //Delete Data
  deletePost(id: number) {
    return this.http.delete(`http://localhost:3000/posts/` + id);
  }
}
