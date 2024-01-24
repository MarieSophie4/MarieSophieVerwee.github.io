// import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { Location } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/**
 * Function to load in correct translation
 * @param _http
 * @param location
 * @returns
 */
// export function httpLoaderFactory(_http: HttpBackend, location: Location) : TranslateHttpLoader {
//   return new TranslateHttpLoader(new HttpClient(_http), './assets/i18n/');
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class AppModule { }


