import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxGpAutocompleteDirective } from "./ngx-gp-autocomplete.directive";
import { Loader } from '@googlemaps/js-api-loader';

@NgModule({
  declarations: [NgxGpAutocompleteDirective],
  exports: [NgxGpAutocompleteDirective],
})
export class NgxGpAutocompleteModule {
  static forRoot(loader: Loader): ModuleWithProviders<NgxGpAutocompleteModule> {
    return {
      ngModule: NgxGpAutocompleteModule,
      providers: [
        {
          provide: Loader,
          useValue: loader
        }
      ]
    };
  }
}
