import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = {
    login: '',
    password: ''
  }

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (httperror) => {
        this.alertService.error(httperror.message);
        console.error(httperror);
      }
    });

  }
}
