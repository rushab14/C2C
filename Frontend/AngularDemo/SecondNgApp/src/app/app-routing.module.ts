import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RformsComponent } from './rforms/rforms.component';
import { LoginComponent } from './login/login.component';
import { CheckTokenService } from './check-token.service';
import { AccessRouteParamsComponent } from './access-route-params/access-route-params.component';
import { T1AssociateComponent } from './t1-associate/t1-associate.component';
import { T1ContainerComponent } from './t1-container/t1-container.component';

const routes: Routes = [{path : 'eform', component:RformsComponent,canActivate:[CheckTokenService]},
                        {path:'login',component:LoginComponent},
                        {path :'route/params/:p1/:p2',component:AccessRouteParamsComponent},
                        {path : 'c2c/type1',component:T1ContainerComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
