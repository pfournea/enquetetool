import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirmsComponent } from './firms/firms.component';
import { FirmsPipe } from './firms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirmsComponent,
    FirmsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
