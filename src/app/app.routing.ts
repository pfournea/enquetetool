import {Routes, RouterModule} from '@angular/router';
import {FirmsComponent} from "./firms/firms.component";
import {FirmDetailsComponent} from "./firm-details/firm-details.component";
import {FirmDetailsGuard} from "./firm-details/firm-details.guard";
const routes: Routes = [
  {path: '', component: FirmsComponent},
  {path: 'firm-details/:id', component: FirmDetailsComponent, canActivate :  [FirmDetailsGuard]}
  ];
export const routing = RouterModule.forRoot(routes);
