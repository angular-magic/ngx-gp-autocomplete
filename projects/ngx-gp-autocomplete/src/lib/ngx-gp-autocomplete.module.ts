import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxGpAutocompleteDirective } from "./ngx-gp-autocomplete.directive";
import { NgxGpConfig } from "./ngx-gp-config";

@NgModule({
  declarations: [NgxGpAutocompleteDirective],
  exports: [NgxGpAutocompleteDirective],
})
export class NgxGpAutocompleteModule {
  static forRoot(config: NgxGpConfig): ModuleWithProviders<NgxGpAutocompleteModule> {
    return {
      ngModule: NgxGpAutocompleteModule,
      providers: [
        {
          provide: NgxGpConfig,
          useValue: config
        }
      ]
    };
  }
}
