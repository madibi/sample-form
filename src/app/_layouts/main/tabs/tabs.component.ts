import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TAB_BARS } from '../configurations/main-layout.configuration';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabBars = TAB_BARS;
  activeLink = this.tabBars[0];
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
