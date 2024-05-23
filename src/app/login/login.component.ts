import { Component } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private keycloakAuth: any;

  constructor() {}

  login() {
    const keycloak = new Keycloak({
      url: 'http://localhost:8180',
      realm: 'EmployeeManagement',
      clientId: 'employeeManagementAuthClient',
    });

    keycloak.init({ onLoad: 'login-required' , responseMode:'query', redirectUri: 'http://localhost:4200/login-callback'})
      .then((authenticated: boolean) => {
        if (authenticated) {
          console.log('User is authenticated');
          // Redirect to home page or perform any action upon successful login
        } else {
          console.error('User is not authenticated');
        }
      })
      .catch((error: any) => {
        console.error('Initialization error', error);
      });
  }
}
