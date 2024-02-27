import { Injectable } from '@angular/core';
import { NgxGpAutocompleteOptions } from './ngx-gp-autocomplete-options';

@Injectable({
  providedIn: 'root'
})
export class NgxGpAutocompleteService {
  private verifyGooglePersistence: boolean;
  private defaultOptions: NgxGpAutocompleteOptions = {};

  setOptions(options: NgxGpAutocompleteOptions) {
    this.defaultOptions = { ...this.defaultOptions, ...options };
  }

  getOptions(): NgxGpAutocompleteOptions {
    return this.defaultOptions;
  }

  enableGooglePersistenceCheck(): void {
    this.verifyGooglePersistence = true;
  }

  getGooglePersistenceCheck(): boolean {
    return this.verifyGooglePersistence;
  }
}
