import { Pipe, PipeTransform } from '@angular/core';
import {Firm} from './firms/firm';

@Pipe({
  name: 'filterPipe'
})
export class FirmsPipe implements PipeTransform {

  transform(firms: Firm[], filterValue: string): Firm[] {
    if(filterValue) {
        return firms.filter(firm => firm.firmNumber.indexOf(filterValue) > 0);
    } else {
        return firms;
    }
  }
}
