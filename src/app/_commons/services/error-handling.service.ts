import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  public isDialogOpen = false;
  constructor(
    private alertService: AlertService,
  ) { }
  async openDialog(data: any) {
    // console.log('%c<<< ' + '------------------------------------------------------------', 'color: #ff0000');
    // console.log('%c error status:' + data.status, 'color: #fffe00');
    // console.log(data.message);
    // console.log(data.reason);
    // console.log('%c------------------------------------------------------------ ' + '>>>', 'color: #ff0000');
    this.alertService.error(data.reason);
  }
}
