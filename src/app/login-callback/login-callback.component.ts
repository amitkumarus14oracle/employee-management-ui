import { Component ,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';
/* import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators'; */

@Component({
  selector: 'app-login-callback',
    templateUrl: './login-callback.component.html', // Ensure this is correct if you have an associated HTML file
    styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit /*, OnDestroy */ {
  employee: any;
  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute
  ) {
  console.log("Component instantiated");
  }
  ngOnInit() {
  console.log("multiple instance creation");
   this.route.queryParams/* .pipe(take(1)) */.subscribe(params => {
      console.log(JSON.stringify(params));
      const code = params['code']; // Retrieve authorization code from query parameters
      if (code) {
       console.log('multiple call:***');
        this.exchangeCodeForAccessToken(code); // Exchange authorization code for access token
      } else {
        console.error('Authorization code not found.');
      }
    });
  }

  private exchangeCodeForAccessToken(code: string) {
    const tokenEndpoint = 'http://localhost:8180/realms/EmployeeManagement/protocol/openid-connect/token';
    const clientId = 'employeeManagementAuthClient';
    const clientSecret = '8rywHawlvuvA2hya7WAWmfDjZtchgrRE';

    const requestBody = {
      grant_type: 'authorization_code',
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: 'http://localhost:4200/login-callback',
      scope: 'openid'
      // Add any additional parameters required by your OAuth provider
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    console.log('multiple call:');
    this.http.post(tokenEndpoint, this.encodeFormData(requestBody), { headers })
      .subscribe(
        (response: any) => {
          const accessToken = response.access_token; // Extract access token from response
          console.log('Access Token1:', accessToken);
          this.makeApiCallWithAccessToken(accessToken); // Use access token for API call
        },
        error => {
          console.error('Error exchanging authorization code for access token:', error);
        }
      );
  }

  private makeApiCallWithAccessToken(accessToken: string) {
    //Make API call to the resource server using the access token
    //Example:
    this.http.get('http://localhost:8081/employee', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      })
    }).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        this.employee = response;
      },
      error => {
        console.error('Error making API call with access token:', error);
      }
    );
  }

  private encodeFormData(data: any): string {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  /* ngOnDestroy() {
      //this.subscription.unsubscribe();
    } */
}
