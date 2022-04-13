import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../services/request.service";

@Component({
  selector: 'app-authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.scss']
})
export class AuthoriseComponent implements OnInit {

  constructor(private router: ActivatedRoute, private requestService: RequestService) { }
  authCode: string = '';
  errorMessage: string = "Sorry, looks like authorisation failed. Please try again!";
  authoriseFail: boolean = false;

  ngOnInit(): void {
  }

  checkAuth(): string {
    let queryParams = this.router.snapshot.queryParams;
    if (Object.keys(queryParams).length !== 0)
    {
      console.log(queryParams);
      this.authCode = queryParams['0'];
      this.authoriseFail = false;
      this.requestService.sendAuthorisedRequest(this.authCode);
      return this.authCode; //this.trimToken(this.authCode)
    }
    else {
      return this.errorMessage;
    }
  }

  trimToken(authCode: string): string {
    let codeLength: number = authCode.length;
    let trimmedCode = authCode.slice(0, codeLength-3);
    console.log('trimmed: ', trimmedCode);
    return trimmedCode;
  }

}
