import { Injectable } from '@angular/core';
import { NgxGpAutocompleteOptions } from "./ngx-gp-autocomplete-options";

@Injectable({
  providedIn: 'root'
})
export class NgxGpAutocompleteService {
  private defaultOptions: NgxGpAutocompleteOptions = new NgxGpAutocompleteOptions();

  setOptions(options: Partial<NgxGpAutocompleteOptions>) {
    this.defaultOptions = { ...this.defaultOptions, ...options };
  }

  getOptions(): NgxGpAutocompleteOptions {
    return this.defaultOptions;
  }
}
