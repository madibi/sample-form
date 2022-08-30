import { Inject, Injectable } from '@angular/core';
import { VERSION as angularVersion } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { VERSION as materialVersion } from '@angular/material/core';
import { VERSION as cdkVersion } from '@angular/cdk';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  isSidenavOpened = false;

  isHandset = false;
  isTablet = false;
  isWeb = false;
  isPortrait = false;
  isLandscape = false;
  isCustomBreakPoint = false;

  materialVersion = materialVersion;
  cdkVersion = cdkVersion;
  angularVersion = angularVersion

  customBreakPoints = [
    '(max-width: 500px)'
  ];

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(
      res => res.matches ? this.isHandset = true : this.isHandset = false);
    this.breakpointObserver.observe(Breakpoints.Tablet).subscribe(
      res => res.matches ? this.isTablet = true : this.isTablet = false);
    this.breakpointObserver.observe([Breakpoints.Web, Breakpoints.Web]).subscribe(
      res => res.matches ? this.isWeb = true : this.isWeb = false);
    this.breakpointObserver.observe('(orientation: portrait)').subscribe(
      res => res.matches ? this.isPortrait = true : this.isPortrait = false);
    this.breakpointObserver.observe('(orientation: landscape)').subscribe(
      res => res.matches ? this.isLandscape = true : this.isLandscape = false);
    this.breakpointObserver.observe(this.customBreakPoints).subscribe(
      res => res.matches ? this.isCustomBreakPoint = true : this.isCustomBreakPoint = false);
  }

  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }

  get screenWidth() {
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }

  get screenHeight() {
    return window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
