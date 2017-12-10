import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';

import { RouterModule } from '@angular/router';
import { MenuComponent } from './home/menu/menu.component';
import { PageComponent } from './home/page/page.component';
import { NewsComponent } from './home/news/news.component';
import { Page1Component } from './home/page1/page1.component';
import { Page2Component } from './home/page2/page2.component';
import { LoginComponent } from './home/login/login.component';
import { WelcomeComponent } from './home/login/welcome/welcome.component';
import { FooterComponent } from './home/footer/footer.component';


const routes=[{
  path: "home",
  component: HomeComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "welcome",
  component: WelcomeComponent
}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    PageComponent,
    NewsComponent,
    Page1Component,
    Page2Component,
    LoginComponent,
    WelcomeComponent,
    FooterComponent
 
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
