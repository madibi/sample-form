import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '@commons/animations/fade-in.animation';
import { AppThemeService } from '@commons/services/app-theme.service';



@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  animations: [fadeInAnimation],
})
export class GeneralComponent implements OnInit {

  constructor(
  ) {
    
  }

  ngOnInit(): void {
  }  
}