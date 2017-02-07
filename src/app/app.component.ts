import { Component } from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EnqueteTool';

  constructor(_translate: TranslateService) {
    console.log('*** in AppComponent constructor');
    _translate.setDefaultLang('nl');
    _translate.getTranslation('nl');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    _translate.use('nl');
    _translate.get("app.hi").subscribe(trans => console.log("*** *** ***"+trans));
  }
}
