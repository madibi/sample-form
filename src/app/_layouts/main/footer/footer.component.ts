import { Component, OnInit } from '@angular/core';
import { FOOTER_SUB_TITLE } from '../configurations/main-layout.configuration';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerSubTitle = FOOTER_SUB_TITLE;

  constructor() { }

  ngOnInit() {
  }

}