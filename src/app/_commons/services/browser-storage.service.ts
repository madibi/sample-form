import { Injectable } from '@angular/core';
import { Storage } from '@commons/schema/_common/models/interfaces/storage.interface';
import { TempStoring } from '@commons/helpers/temp-storage.helper';
import { LocalStoring } from '@commons/helpers/local-storage.helper';
import { StoringProperty } from '@commons/schema/_common/models/enums/storing-property.enum';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService implements Storage {

  private storage: Storage;

  constructor(

  ) {
    if (typeof Storage === 'undefined') {
      // If browser doesn't support storage.
      console.warn(
        'Storage in Your Browser not supported or you turned them off, ' +
        'Storage Service will use a fallback strategy instead'
      );
      this.storage = new TempStoring(); // Use TempStorage as a backup plan.
    } else {
      this.storage = new LocalStoring(); // Use regular local storage.
    }
  }

  public get(key: StoringProperty, defaultValue: any = null): any {
    return this.storage.get(key, defaultValue);
  }

  public set(key: StoringProperty, value: any): void {
    this.storage.set(key, value);
  }

  public clear(key: StoringProperty): void {
    this.storage.clear(key);
  }
}
