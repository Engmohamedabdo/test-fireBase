import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private authService:AuthService, private router:Router) { }

  login(){
    if(this.email == ''){
      alert('Place enter email');
      return
    }

    if(this.password == ''){
      alert('Place enter password');
      return
    }
    this.authService.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }

  signInWithGoogle() {
    this.authService.googleSignIn();
  }

  removeToken(){
  localStorage.removeItem('token');
  }

  ngOnInit(): void {
    this.removeToken();
  }

}
