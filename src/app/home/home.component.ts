import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  /* implements OnInit  */{
  //constructor(private route: ActivatedRoute) { }

    /* ngOnInit(): void {
    console.log('ActivatedRoute Snapshot:', this.route.snapshot);
      console.log('Query Params:', this.route.snapshot.queryParams);
      // Access query parameters
      this.route.queryParams.subscribe(params => {
        const code = params['code']; // Retrieve authorization code
        if (code) {
          // Authorization code found, process it
          console.log('Authorization Code:', code);
          // Call a method to exchange the authorization code for an access token
          //this.exchangeCodeForAccessToken(code);
        } else {
          // Authorization code not found, handle error
          console.error('Authorization code not found.');
        }
      });
    }

    private exchangeCodeForAccessToken(code: string) {
      // Implementation to exchange authorization code for access token
      // This method will be called when the authorization code is obtained
    } */
}
