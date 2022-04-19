import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { DOCUMENT } from '@angular/common';
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.scss']
})
export class AuthoriseComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private authService: AuthService,
              @Inject(DOCUMENT) private document: Document) { }
  authCode: string = '';
  errorMessage: string = "Sorry, looks like authorisation failed. Please try again!";
  authoriseFail: boolean = false;

  ngOnInit(): void {
  }



  sendRequest() {
    let queryParams = this.router.snapshot.queryParams;
    if (Object.keys(queryParams).length !== 0 && queryParams['code'])
    {
      this.authCode = queryParams['code'];
      this.authoriseFail = false;
      this.trimAuthCode(this.authCode);
      this.authService.exchangeAuthCodeForToken(this.authCode);
    }
  }

  trimAuthCode(authCode: string): string {
    let codeLength: number = authCode.length;
    console.log('lenb', authCode[codeLength - 1]);
    if (authCode[codeLength - 1] === '_' && authCode[codeLength - 2] === '#')
    {
      let trimmedCode = authCode.slice(0, codeLength-3);
      console.log('trimmed: ', trimmedCode);
      return trimmedCode;
    }
    return authCode;
  }

}
