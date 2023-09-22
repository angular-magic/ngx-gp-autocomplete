import { Component, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NgxGpAutocompleteDirective } from "@angular-magic/ngx-gp-autocomplete";
import { defaultFormHTML, defaultFormValidations } from "./form-code";
import { NgxGpAutocompleteOptions } from "@angular-magic/ngx-gp-autocomplete";

@Component({
  selector: 'app-multiple-countries',
  templateUrl: './multiple-countries.component.html',
  styleUrls: ['./multiple-countries.component.scss']
})
export class MultipleCountriesComponent {
  autocompleteInputControl: FormControl = new FormControl<string>('');
  @ViewChild('ngxPlaces') placesRef: NgxGpAutocompleteDirective;

  defaultFormHTML: typeof defaultFormHTML = defaultFormHTML;
  defaultFormValidations: typeof defaultFormValidations = defaultFormValidations;
  options: NgxGpAutocompleteOptions = {
    componentRestrictions: { country: ['MD', 'RO'] },
    types: ['geocode'],
  };

  selectAddress(place: google.maps.places.PlaceResult): void {
    // Place object from API
    console.log(place);

    // Text from input
    console.log(this.placesRef.el.nativeElement.value);
  }
}
