import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email:any;
  nameError: any;
  emailError:any;
  passwordError:any;
  formdata:any;
  password:any;
  constructor() { }

  ngOnInit(): void {
    this.formdata=new FormGroup({

      email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("")
      ])),
      password:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("")
      ]))})

  }
  onClickSubmuit(){
    const message = `Your email is  ${this.email}  , password is : ${this.password}`;
    alert(message);
   
  }
  validateName() {
  
  }
  validateEmail() {
    this.emailError = !this.email || !this.email.length;
    return this.emailError;
  }

  validatePassword() {
    this.passwordError = !this.password || !this.password.length;
    return this.nameError;
  }

  }


