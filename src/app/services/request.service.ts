import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  appSecret: string = '58c52db56effff2c6f4d14b5e2ee1008';
  appId: string = '1448683805589247';
  redirectUrl: string = 'https://lolagarden.github.io/ig-connect/';

  sendAuthorisedRequest(code: string) {

    console.log('code', code);
    let requestBody = {
      'client_id': this.appId,
      'client_secret': this.appSecret,
      'grant_type': 'authorization_code',
      'redirect_uri': this.redirectUrl,
      'code': code
    }

    let body: HttpParams = new HttpParams()
      .set('client_id', this.appId)
      .set('client_secret', this.appSecret)
      .set('grant_type', 'authorization_code')
      .set('redirect_uri', this.redirectUrl) // `${location.protocol}//${location.hostname + (location.port ? ':' + location.port : '')}/`
      .set('code', code)

    let headers : HttpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(`https://api.instagram.com/oauth/access_token`, body.toString(), { headers }).subscribe(responseData => {
      console.log('res: ', responseData);
    });

  }
}
