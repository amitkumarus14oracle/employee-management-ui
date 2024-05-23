import { Component } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  /* private keycloakAuth: any;

  constructor() {}

  ngOnInit() {
    this.initKeycloak();
  }

  initKeycloak() {
    this.keycloakAuth = new Keycloak({
      url: 'KEYCLOAK_SERVER_URL/auth',
      realm: 'YOUR_REALM',
      clientId: 'YOUR_CLIENT_ID',
    });

    this.keycloakAuth.init({ onLoad: 'login-required' })
      .then((authenticated: boolean) => {
        if (authenticated) {
          console.log('User is authenticated');
        } else {
          console.error('User is not authenticated');
        }
      })
      .catch((error: any) => {
        console.error('Initialization error', error);
      });
  } */
}
