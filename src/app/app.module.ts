import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Loader } from "@googlemaps/js-api-loader";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxGpAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyAFaylOBsuhYPYw9YqWmhN370xTvc6DXYU',
        libraries: ['places']
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
