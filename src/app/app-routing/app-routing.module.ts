import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { OtpComponent } from '../otp/otp.component';
const routes: Routes = [
{ path: '', component: OtpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }