import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { baseReducers, metaReducers } from '@commons/store/_base/_base.reducer';
import { AppEffects } from '@commons/store/app/app.effect';
import { UserEffects } from '@commons/store/user/user.effect';
import { EnumEffects } from '@commons/store/enum/enum.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from "ngx-toastr";
import { AppInitializer } from '@commons/settings/app-initializer';
import { environment } from "@environments/environment";
import { StoreRouteCustomSerializer } from '@commons/helpers/store-route-custome-serilizer.helper';
import { BaseUrlInterceptor } from '@commons/interceptors/base-url.interceptor';
import { HeaderInterceptor } from '@commons/interceptors/header.interceptor';
import { LoaderInterceptor } from '@commons/interceptors/loader.interceptor';
import { CatchErrorInterceptor } from '@commons/interceptors/catch-error.interceptor';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_layouts/general/_/general.module').then(m => m.GeneralModule),
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppInitializer,
    BrowserModule,
    RouterModule.forRoot(routes),    
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(baseReducers, {metaReducers}),
    EffectsModule.forRoot([
      AppEffects,
      UserEffects,
      // EnumEffects,
    ]),
    // TODO: disable ngrx in product mode
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),    
    LayoutModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.serverUrl },
    { provide: RouterStateSerializer, useClass: StoreRouteCustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient);
}