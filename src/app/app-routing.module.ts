import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact/:id",component:ViewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
