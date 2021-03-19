import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signinForm:NgForm){
    console.log(signinForm);
    console.log(signinForm.value.emailAddressField);
    console.log(signinForm.value.passwordField);
    console.log(signinForm.value.genderField);
    console.log(signinForm.value.termsField);
  }

}
