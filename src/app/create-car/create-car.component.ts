import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsDetailsService } from '../cars-details.service';
@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
cars:any;
name:any;
price:any;
model:any;
type:any;
image:any;
description:any;
kilometer:any;
isAvailable:any;
addForm: any;
car_id: any;
 min = 1;
 max = 6;
 randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

constructor(private CarsDetailsService: CarsDetailsService,  
  private url: ActivatedRoute,
  private router: Router) {
    this.addForm = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', Validators.required),   
      image: new FormControl( `car-rent-${this.randomNumber}.png`, [Validators.required]),
      model: new FormControl('', [Validators.required]), 
      type: new FormControl('', [Validators.required, Validators.maxLength(10)], ), 
      kilometer: new FormControl('', [Validators.required]),  
      isAvailable: new FormControl('', [Validators.required]), 
      price: new FormControl('', [Validators.required,Validators.maxLength(5000)]), 

    });
    
  }

ngOnInit(): void {
}
get nameControl() {
  return this.addForm.get('name');
}
onSubmit() {
  
  if (this.addForm.invalid) {
    window.alert('Please complete the form before submitting');
    console.log(this.nameControl.valid);
    console.log("Validation is : "+this.addForm.valid);
  }else{
  const msg= `your form has been submitted`
  alert(msg);
 location.reload();
 window.location.href = "/cars";
  this.CarsDetailsService.createCar(this.addForm.value).subscribe(
      (car: any) => {
          this.router.navigate(['/home']);
      },
      error => {
          alert(error);
      }
      
  );
  
    }
}

Cancel(){
this.cars='';
this.name='';
this.price='';
this.model='';
this.type='';
this.image='';
this.description='';
this.kilometer='';
this.isAvailable='';
}

}
  // addCar() {
  //   const newCar = {
  //     id: this.cars.length + 1,
  //     name: this.name,
  //     model: this.model,
  //     price: this.price,
  //     type: this.type,
  //     kilometer: this.kilometer,
  //     image: 'car-rent-1.png',
  //     isAvailable: true
  //   };
  //   this.cars.push(newCar);
  //   console.log(newCar);
  // }


// addCar(car: Car) {
//   return this.http.post('http://localhost/Lend/add.php', car).pipe(
//     catchError((error: any) => {
//       // handle the error and return an observable with a user-facing error message
//       return throwError(error);
//     })
//   );
// }

// onSubmit() {
//   this.CarsDetailsService.addCar(this.car).subscribe((result: any) => {
//     console.log(result);
//   });
// }

