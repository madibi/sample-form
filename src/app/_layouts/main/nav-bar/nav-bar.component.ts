import { Component } from '@angular/core';
import { AppInfoService } from '@commons/services/app-info.service';
import { SIDE_BAR_TITLE } from '../configurations/main-layout.configuration';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  sideBArTitle = SIDE_BAR_TITLE;

  constructor(public appInfoService: AppInfoService) {}


}
