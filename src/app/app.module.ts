import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularCesiumModule } from 'angular-cesium';
import { LivewindowsComponent } from './livewindows/livewindows.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { HeaderComponent } from './main-window/header/header.component';
import { LoginComponent } from './login/login.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    LivewindowsComponent,
    MainWindowComponent,
    HeaderComponent,
    LoginComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    HttpClientModule
  ],
 providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
