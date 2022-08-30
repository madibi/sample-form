import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './../__/main.component';
import { TabsComponent } from '../tabs/tabs.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    TabsComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    MatListModule,

    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
  ]
})
export class MainModule { }
