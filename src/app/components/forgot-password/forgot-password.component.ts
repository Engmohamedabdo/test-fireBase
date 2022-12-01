import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';

  constructor(private authService:AuthService) { }

  forgotPassword(){
    this.authService.forgotPassword(this.email);
    this.email = '';
  }

  ngOnInit(): void {
  }

}
