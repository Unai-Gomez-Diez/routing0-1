import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/general/home/home.component';
import { ContactComponent } from './paginas/general/contact/contact.component';
import { AboutComponent } from './paginas/general/about/about.component';
import { SigninComponent } from './paginas/general/signin/signin.component';
import { NotfoundComponent } from './paginas/general/notfound/notfound.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "signin", component: SigninComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
