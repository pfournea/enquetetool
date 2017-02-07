import {TranslateLoader} from "ng2-translate";
import {Observable} from "rxjs";
import {TRANSLATIONS_NL} from "./translations_nl";
import {TRANSLATIONS_FR} from "./translations_fr";
import * as str2json from '../../../node_modules/string-to-json/lib/string-to-json.js';

export class TranslationLoaderImpl extends TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if(lang === 'nl') {
      return Observable.of(this.convert(TRANSLATIONS_NL));
    }
    return Observable.of(this.convert(TRANSLATIONS_FR));
  }

  convert(map : {[key : string] : string}) : any {
    return str2json.convert(map);
  }


}
