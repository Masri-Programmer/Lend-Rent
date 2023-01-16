import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsDetailsService } from '../cars-details.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  addForm: any;
  car_id: any;
   car: any;
  constructor(private CarsDetails: CarsDetailsService,  
              private url: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', ),
      type: new FormControl('', ),
      model: new FormControl('', ),
      name: new FormControl('', ),   
      price: new FormControl('', ),
      kilometer: new FormControl('', ),
      // image: new FormControl('', ),
      isAvailable: new FormControl(true, )
    });
    this.car_id = this.url.snapshot.params['id'];
//ActivatedRoute.Snapshot: Contains the information about a route associated
// with a component loaded in an outlet at a particular moment in time.
    if (this.car_id>0) {
      this.CarsDetails.getSingleCar(this.car_id).subscribe(
                  (result:any)=>{
                    console.log(result.output);
                    this.addForm.patchValue(result.output[0]);//get the first
// object in the array output
                    //patchValue(): Replace any properties defined in the object
// that have changed in the form model.
                  }
      )
       
    }
  }
  onEdit(){
    this.CarsDetails.editCar(this.addForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['/']);   
      },   
     error => {   
       alert(error);
     });
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
