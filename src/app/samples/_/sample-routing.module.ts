import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from '../address-form/address-form.component';
import { DragDropComponent } from '../drag-drop/drag-drop.component';
import { LoginComponent } from '../login/login.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { TableComponent } from '../tabel/table.component';
import { TreeComponent } from '../tree/tree.component';
import { SampleComponent } from '../__/sample.component';


const routes: Routes = [
  {
    path: '',
    component: SampleComponent,
    children: [
      {
        path: 'address-form',
        component: AddressFormComponent
      },
      {
        path: 'drag-drop',
        component: DragDropComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'navigation',
        component: NavigationComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'tree',
        component: TreeComponent
      },          
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }