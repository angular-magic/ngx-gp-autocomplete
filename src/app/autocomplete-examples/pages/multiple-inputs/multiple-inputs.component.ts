import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NgxGpAutocompleteService } from "@angular-magic/ngx-gp-autocomplete";
import { defaultFormHTML, defaultFormValidations } from "./form-code";

@Component({
  selector: 'app-multiple-inputs',
  templateUrl: './multiple-inputs.component.html',
  styleUrls: ['./multiple-inputs.component.scss']
})
export class MultipleInputsComponent {
  autocompleteInputControl: FormControl = new FormControl<string>('');
  secondAutocompleteInputControl: FormControl = new FormControl<string>('');

  defaultFormHTML: typeof defaultFormHTML = defaultFormHTML;
  defaultFormValidations: typeof defaultFormValidations = defaultFormValidations;

  constructor(
    private ngxGpAutocompleteService: NgxGpAutocompleteService
  ) {
    this.ngxGpAutocompleteService.setOptions({
      componentRestrictions: { country: ['MD', 'RO'] },
      types: ['geocode'],
    });
  }

  selectAddress(place: google.maps.places.PlaceResult): void {
    // Place object from API
    console.log(place);
  }
}
