import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '@commons/services/app-info.service';
import { HEADER_TITLE } from '../configurations/main-layout.configuration';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerTitle = HEADER_TITLE;

  constructor(public appInfoService: AppInfoService) {}

  ngOnInit(): void {
  }

}
