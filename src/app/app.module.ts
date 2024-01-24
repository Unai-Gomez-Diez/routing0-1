import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/general/home/home.component';
import { ContactComponent } from './paginas/general/contact/contact.component';
import { AboutComponent } from './paginas/general/about/about.component';
import { SigninComponent } from './paginas/general/signin/signin.component';
import { NotfoundComponent } from './paginas/general/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SigninComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
