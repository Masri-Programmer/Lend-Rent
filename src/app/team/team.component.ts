import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { HttpClient } from '@angular/common/http';
// import Swiper core and required modules



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class teamComponent implements OnInit {
  
   people = [
    {
      name: 'Alice',
      jobTitle: 'Software Engineer',
      image:'team-1.jpg',
      email: 'alice@example.com',
      instagram: '@alice',
      twitter: '@alice',
      linkedin: 'alice',
      facebook: 'alice'
    },
    {
      name: 'Carla',
      jobTitle: 'Store Manager',
      image:'team-2.jpg',
      email: 'Carla@example.com',
      instagram: '@Carla',
      twitter: '@Carla',
      linkedin: 'Carla',
      facebook: 'Carla'
    },
    {
      name: 'Charlie',
      jobTitle: 'Exhibiter',
      image:'team-3.jpg',
      email: 'charlie@example.com',
      instagram: '@charlie',
      twitter: '@charlie',
      linkedin: 'charlie',
      facebook: 'charlie'
    },
    {
      name: 'karen',
      jobTitle: 'Mechanical Engineer',
      image:'team-4.jpg',
      email: 'karen@example.com',
      instagram: '@karen',
      twitter: '@karen',
      linkedin: 'karen',
      facebook: 'karen'
    }
 
  ];
  
  data: any;
  team:any;
  constructor(private TeamService: TeamService) {}

  ngOnInit() {
    // this.data = this.TeamService.getData();

    
    // new Swiper('.swiper-container', {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    //   loop: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });
    this.TeamService.getteam().subscribe(
      (result:any)=>{
        console.log(result)
        this.team  =  result.output;
      }
      )
    }
  }
 
