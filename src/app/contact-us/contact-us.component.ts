import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title = 'email-validation';
  formdata:any;
  fname:any;
  lname:any;
  email:any;
  phone:any;
  message:any;
  nameError: any;
  emailError:any;
  phoneError:any;
  constructor() { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      firstname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("A-Z a-z")
      ])),

      lastname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("A-Z a-z")
      ])),

      email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("")
      ])),
      phone:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("")
      ]))})

  }
  onClickSubmuit(){
    const message = `Your email is  ${this.email} , name is : ${this.fname} ${this.lname} , phone is : ${this.phone}`;
    alert(message);
   
  }
  validateName() {
    this.nameError = !this.fname || !this.fname.length;
    return this.nameError;
  }
  validateEmail() {
    this.emailError = !this.email || !this.email.length;
    return this.emailError;
  }

  validatePhone() {
   
  }

 
  }

