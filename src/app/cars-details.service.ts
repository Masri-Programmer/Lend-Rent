import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Car } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarsDetailsService {

 
    baseUrl: string = 'http://localhost/Lend/';
    constructor(private http: HttpClient) { }
    getCar() {
      return this.http.get<Car[]>(this.baseUrl+'view.php');
    }  
    getSingleCar(id:any) {
      return this.http.get<Car[]>(this.baseUrl+'view.php?id='+id);
    }
    editCar(car:any) {
      return this.http.put(this.baseUrl+'update.php', car);   
  }   
    createCar(car:any) {
      return this.http.post(this.baseUrl+'insert.php', car);   
    } 
    deleteCar(id:any) {
      console.log(id);
      return this.http.delete(this.baseUrl+'delete.php?id='+ id);   
    }  
  }