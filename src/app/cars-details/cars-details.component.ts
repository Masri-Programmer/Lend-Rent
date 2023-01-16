import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsDetailsService } from '../cars-details.service';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {
  id: any;
  car: any;
  cars:any;
  name:any;
  addForm: any;
  car_id: any;
type: any;
  constructor(public CarsDetailsService: CarsDetailsService, private route: ActivatedRoute, private router: Router) {
    
   }
  //  getCarById() {
  //   const id = +this.route.snapshot.paramMap?.get('id');
  //   if (id) {
  //     this.CarsDetailsService.getSingleCar(id).subscribe((result: any) => {
  //       this.car = result.output;
  //     });
  //   }
  // }
  ngOnInit(): void {
    this.car_id = this.route.snapshot.params['id'];
    if (this.car_id > 0) {
      this.CarsDetailsService.getSingleCar(this.car_id).subscribe(
        (result: any) => {
          console.log(result.output);
          this.car = result.output[0];
        }
      );
    }
  }
}