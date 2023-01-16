import { Component, OnInit } from '@angular/core';
import { CarsDetailsService } from '../cars-details.service';

@Component({
  selector: 'app-step03',
  templateUrl: './step03.component.html',
  styleUrls: ['./step03.component.css']
})
export class Step03Component implements OnInit {
  cars:any;
  constructor(public CarsDetailsService: CarsDetailsService) { }

  ngOnInit(): void {
    this.CarsDetailsService.getCar().subscribe(
      (result:any)=>{
        console.log(result)
        this.cars  =  result.output;
      }
    )}

public book(id:number) {
  for(let cars of this.cars){
    if(cars.id==id) {
      cars.isAvailable = false;
      alert("Booking has done successfully! ")
    }
  }
}
}

