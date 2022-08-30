import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ControlPanelComponent } from '../__/control-panel.component';

const routes: Routes = [
  {
    path: '',
    component: ControlPanelComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
      },  
      {
        path: 'main',
        component: MainComponent
      },        
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule { }