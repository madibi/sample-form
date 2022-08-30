import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInOutAnimation } from '@commons/animations/slide-in-out.animation';
import { SIDE_BARS } from '../configurations/main-layout.configuration';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideInOutAnimation],
})
export class MainComponent implements OnInit {
  
  sideBears = SIDE_BARS;

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated && outlet.activatedRoute.routeConfig?.path;
  }
}
