import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private authService:AuthService) { }

  register(){
    if(this.email == ''){
      alert('Place enter email');
      return
    }

    if(this.password == ''){
      alert('Place enter password');
      return
    }
    this.authService.register(this.email,this.password);
    this.email = '';
    this.password = '';
  }
  ngOnInit(): void {
  }

}
