import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthoriseComponent} from "./authorise/authorise.component";

const routes: Routes = [
  // {path: '', component: HomeComponent },
  {path: 'auth', component: AuthoriseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
