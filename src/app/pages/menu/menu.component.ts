import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../resources/iam/model/user.model';
import { UserDataService } from './../../resources/iam/service/data/user-data.service';
import { AuthService } from './../../resources/iam/service/auth/auth.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  projectName = environment.project_name;
  username;
  public user: User;
  id: number;

  // constructor() { }

  constructor(
    public authService: AuthService,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {}

  authService_logout() {
    this.router.navigate(['/']);
    return this.authService.logout();
  }

  getUsername() {
    return this.authService.getAuthenticatedUser();
  }

  navigate_welcome() {
    this.username = this.getUsername();
    this.router.navigate(['welcome', this.username]);
  }

  reset_pwd() {
    this.username = this.getUsername();
    console.log(`ResetPassword:${this.username}`);
  }

  open_dashboard() {
    this.username = this.getUsername();
    console.log(`Dashboard:${this.username}`);
  }
}
