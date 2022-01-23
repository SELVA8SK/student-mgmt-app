import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactForm=new FormGroup({
    email:new FormControl,
    password:new FormControl
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.contactForm.value.email=="selva")
    {
      alert("Login Success");
    }
    else
    {
      
    }
    console.log(this.contactForm.value);
  }

}
