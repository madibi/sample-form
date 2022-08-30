import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './../__/general.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./../../../auth/_/auth.module').then(m => m.AuthModule),
      },  
      {
        path: 'control-panel',
        loadChildren: () => import('./../../../control-panel/_/control-panel.module').then(m => m.ControlPanelModule),
      },       
      {
        path: 'samples',
        loadChildren: () => import('./../../../samples/_/sample.module').then(m => m.SampleModule),
      },            
      {
        path: '',
        loadChildren: () => import('./../../main/_/main.module').then(m => m.MainModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }