import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FirmsComponent} from './firms/firms.component';
import {FirmsPipe} from './firms.pipe';
import {FirmDetailsComponent} from './firm-details/firm-details.component';
import {routing} from './app.routing';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {FirmDetailsGuard} from "./firm-details/firm-details.guard";
import {TranslateModule, TranslateLoader} from "ng2-translate";
import {createTranslateLoaderFactory} from "./translations/translations.translateloaderfactory";
import {DataTableModule} from "angular2-datatable";
@NgModule({
  declarations: [
    AppComponent,
    FirmsComponent,
    FirmsPipe,
    FirmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    DataTableModule,
    TranslateModule.forRoot(
      {
        provide: TranslateLoader,
        useFactory: (createTranslateLoaderFactory)
      }
    )
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},FirmDetailsGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
