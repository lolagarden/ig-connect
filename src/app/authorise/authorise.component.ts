import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.scss']
})
export class AuthoriseComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  authCode: string = '';

  ngOnInit(): void {
  }

  getSomeContent() {
    let queryParams = this.router.snapshot.queryParams;
    if (queryParams !== null)
    {
      console.log(queryParams);
    }
    else return;

  }

}
