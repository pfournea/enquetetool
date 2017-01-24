import {Routes, RouterModule} from '@angular/router';
import {FirmsComponent} from "./firms/firms.component";
import {FirmDetailsComponent} from "./firm-details/firm-details.component";
const routes: Routes = [
  {path: '', component: FirmsComponent},
  {path: 'firm-details', component: FirmDetailsComponent}
  ];
export const routing = RouterModule.forRoot(routes);
