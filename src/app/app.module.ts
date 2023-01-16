import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Step01Component } from './step01/step01.component';
import { BannerComponent } from './banner/banner.component';
import { Step03Component } from './step03/step03.component';
import { teamComponent } from './team/team.component';
import { ChoiceComponent } from './choice/choice.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CarsComponent } from './cars/cars.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SvcsComponent } from './svcs/svcs.component';
import { SearchComponent } from './search/search.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { TeamService } from './team.service';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { FaqComponent } from './faq/faq.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { SvcsDetailsComponent } from './svcs-details/svcs-details.component';
import { CarEditComponent } from './car-edit/car-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Step01Component,
    BannerComponent,
    Step03Component,
    teamComponent,
    ChoiceComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    NavComponent,
    CarsComponent,
    CarsDetailsComponent,
    ScrollTopComponent,
    SvcsComponent,
    SearchComponent,
    CreateCarComponent,
    FaqComponent,
    FormComponent,
    RegisterComponent,
    SvcsDetailsComponent,
    CarEditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
