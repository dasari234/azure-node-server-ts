import { JiraService } from './services/jira.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { routesConfig } from './router.config';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './header/header-component';
import { NavComponent } from './header/nav/nav-component';
import { LogoComponent } from './header/logo/logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AzureInfraComponent } from './azure-infra/azure-infra.component';

import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import { Router, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LogoComponent,
    SidebarComponent,
    FooterComponent,
    MainContentComponent,
    AzureInfraComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [
    JiraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
