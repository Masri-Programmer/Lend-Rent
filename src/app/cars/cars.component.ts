import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarsDetailsService } from '../cars-details.service';
import { SlicePipe } from '@angular/common';
import { Car } from '../cars';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [SlicePipe]
})
export class CarsComponent implements OnInit {
  componentId =1 ;
  cars:any;
  searchText: string = ' '; 
  delete:boolean=false;
  constructor(private router: Router,public CarsDetailsService: CarsDetailsService) { }
  ngOnInit(): void {
    this.CarsDetailsService.getCar().subscribe(
      (result:any)=>{
        console.log(result)
        this.cars  =  result.output;
      }
      )
    }
    makeDelete(){
      this.delete=true;
      //location.reload();
    }
    deleteCar(car:any){
        // console.log(id);
        this.CarsDetailsService.deleteCar(car.id).subscribe(
          data=>{
            this.cars = this.cars.filter((u: any) => u !== car);
        
        })
      }
    
  
  
  onSearchTextEntered(searchValue : string){
    this.searchText = searchValue;
    console.log(this.searchText);
      }
      scrollToTop() {
        window.scrollTo(0, 0);
      }
}
