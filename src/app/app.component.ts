import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ig-connect';


  checkAuth(): void {
    document.location.href = 'https://www.instagram.com/oauth/authorize?client_id=1448683805589247&redirect_uri=https://lolagarden.github.io/ig-connect/&scope=user_profile,user_media&response_type=code';
  }

}


