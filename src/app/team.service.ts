import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { team } from './team';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
 
 
  baseUrl: string = 'http://localhost/Lend/';
  constructor(private http: HttpClient) { }
  getteam() {
    return this.http.get<team[]>(this.baseUrl+'viewTeam.php');
  }  
  getSingleteam(id:any) {
    return this.http.get<team[]>(this.baseUrl+'viewTeam.php?id='+id);
  }  
}