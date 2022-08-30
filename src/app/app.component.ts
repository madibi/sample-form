import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppInfoService } from '@commons/services/app-info.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent {

  constructor(public appInfoService: AppInfoService) {}

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated && outlet.activatedRoute.routeConfig?.path;
  }
}