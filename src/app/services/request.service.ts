import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  appSecret: string = '58c52db56effff2c6f4d14b5e2ee1008';
  appId: string = '1448683805589247';
  redirectUrl: string = 'https://lolagarden.github.io/ig-connect/';

  sendAuthorisedRequest(code: string) {

    //code="AQCYfpJXbYetmso42XXkIZJcJ_cIkhf5zq3EfU4eZ_29TZC9ntFaBcZ6ZdWEaLZZ8NeFh2jbWEX9gKq6eYDok9_EYOuuYpMA_hn9ap5oJTeQgMVZtb5abbTUIy7-0WwIGWTtw3enPNmMLJd9GaXrvrP_xNS8kzjBNWXoeqx_zE_qbPvz3wRYMF26qAPPZ1Sse7fz3ENmHiTmZjJlExUuwUzf1mjpCCb0X6x3NG8ThuMlCg";

    let requestBody = {
      'client_id': this.appId,
      'client_secret': this.appSecret,
      'grant_type': 'authorization_code',
      'redirect_uri': this.redirectUrl,
      'code': code
    }
    //'Access-Control-Allow-Origin': 'https://api.instagram.com'
    //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT", TODO: CORS policy issue


    let header = {
      'headers': {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      }
    }
    console.log(requestBody);

    this.http.post(`https://api.instagram.com/oauth/access_token`, requestBody, header).subscribe(responseData => {
      console.log('res: ', responseData);
    });

  }
}
