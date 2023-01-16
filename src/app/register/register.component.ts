import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata:any;
  fname:any;
  lname:any;
  email:any;
  password:any;
  subscribe:any;
  nameError: any;
  emailError:any;
  passwordError:any;
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
      // subscribe:new FormControl("",Validators.compose([
        
      // ])),
      password:new FormControl("",Validators.compose([
        Validators.required,
       
      ]))})

  }



  onClickSubmuit(){
    const message = `Your email is  ${this.email} , name is : ${this.fname} ${this.lname} , phone is : ${this.password}, subscribed: ${this.subscribe}`;
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

  validatePassword() {
    this.passwordError = !this.password || !this.password.length;
    return this.passwordError;
  }

 
}
