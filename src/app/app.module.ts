import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainModule } from './modules/main/main.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CurrentRepositoryModule } from './modules/current-repository/current-repository.module';

import { AppComponent } from './app.component';
import { extModules } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    CoreModule,
    extModules,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule,
    CurrentRepositoryModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
