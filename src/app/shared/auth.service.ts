import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router:Router) { }

  // login method
  login(email: string,password: string) {
    this.fireAuth.signInWithEmailAndPassword(email,password).then( res => {
      localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
      // if(res.user?.emailVerified == true) {
      //   this.router.navigate(['/dashboard']);
      // } else {
      //   this.router.navigate(['/varify-email']);
      // }
    }, err => {
      // alert(err.message);
      console.log('The password is invalid or the user does not have a password');
      // this.router.navigate(['/login']);
    })
  }

  // register method
  register(email: string,password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email,password).then( res => {
      alert('Successful')
      this.router.navigate(['/login']);
      this.sendEmailForVarification(res.user);
      console.log(res.user);

    }, err => {
      console.log(err.message);
      // alert(err.message);
      // this.router.navigate(['/register']);
    })
  }

  // logOut method
  logOut() {
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);

    })
  }

  // fotgot-Password method
  forgotPassword(email: string){
    this.fireAuth.sendPasswordResetEmail(email).then( res => {
      console.log(res);

      this.router.navigate(['/varify-email'])
    }, err => {
      alert(err.message);
    })
  }

  // email Varify method
  sendEmailForVarification(user: any){
    user.sendEmailVarification().then( (res : any) => {
      this.router.navigate(['/varify-email']);
    }, (err: any) => {
      alert('something went worng');
      console.log(err);

    })
  }

  // sign in with google
  googleSignIn(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid))
    }, err => {
      alert(err.message)
    })
  }


}
