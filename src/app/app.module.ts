import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainModule } from './modules/main/main.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
