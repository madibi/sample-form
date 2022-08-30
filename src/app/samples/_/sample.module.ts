// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SampleComponent } from '../__/sample.component';
import { LoginComponent } from '../login/login.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { SampleRoutingModule } from './sample-routing.module';
import { TableComponent } from '../tabel/table.component';
import { TreeComponent } from '../tree/tree.component';
import { DragDropComponent } from '../drag-drop/drag-drop.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    SampleComponent,
    AddressFormComponent,
    LoginComponent,
    NavigationComponent,
    TableComponent,
    TreeComponent,
    DragDropComponent,
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,   
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
  ]
})
export class SampleModule { }
