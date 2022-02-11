import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/resources/iam/service/auth/auth.service';
import { UserDataService } from 'src/app/resources/iam/service/data/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username;
  password;
  user;
  active;
  invalidLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    this.authService.authenticate(this.username, this.password).subscribe(
      (data) => {
        // console.log(data);
        this.userDataService
          .getUserbyUsername(this.username)
          .subscribe((response) => {
            this.active = response.active;
            // console.log(this.active);
            if (this.active === 0) {
              // console.log(`active:0-Disable login`);
              this.invalidLogin = true;
              this.authService.logout();
            } else {
              this.router.navigate(['welcome', this.username]);
              this.invalidLogin = false;
            }
          });
      },
      (error) => {
        // console.log(error);
        this.invalidLogin = true;
      }
    );
  }

  forgotPwd() {
    console.log(`forgotPwd:${this.invalidLogin}`);
  }
}
