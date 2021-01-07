import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthDataModule } from './auth-data/auth-data.module';
import { UserModule } from './user/user.module';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private auth: AngularFireAuth) {}

  registerUser(authData: AuthDataModule) {
    this.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(
      result => {
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthDataModule) {
    this.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
      result => {
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isAuth() {
    return this.isAuthenticated;
  }
 
  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/recipes']);
  }
}
