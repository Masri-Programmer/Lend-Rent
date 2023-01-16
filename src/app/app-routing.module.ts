import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsComponent } from './cars/cars.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SvcsDetailsComponent } from './svcs-details/svcs-details.component';
import { SvcsComponent } from './svcs/svcs.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "cars", component: CarsComponent},
  {path: "cars-details", component: CarsDetailsComponent},
  {path: "svcs-details", component: SvcsDetailsComponent},
  {path: "form", component: FormComponent},
  {path: "form/register", component: RegisterComponent},
  {path: "cars-details/:id", component: CarsDetailsComponent},
  {path: "car-edit/:id", component: CarEditComponent},
  {path: "svcs", component: SvcsComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
