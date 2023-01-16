import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamService } from './team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lend';
  data: any;
  openNav(){
    
  }
  constructor(private http: HttpClient,private TeamService: TeamService) { }

  ngOnInit() {
    // this.http.get('http://localhost/Lend/').subscribe((data: any) => {
    //   this.TeamService.setData(data);
    // });
  }
}

