import { Component, ViewChild } from '@angular/core';
import { NgxGpAutocompleteDirective } from "@angular-magic/ngx-gp-autocomplete";
import { defaultFormHTML, defaultFormValidations } from "./form-code";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-default-autocomplete',
  templateUrl: './default-autocomplete.component.html',
  styleUrls: ['./default-autocomplete.component.scss']
})
export class DefaultAutocompleteComponent {
  autocompleteInputControl: FormControl = new FormControl<string>('');
  @ViewChild('ngxPlaces') placesRef: NgxGpAutocompleteDirective;

  defaultFormHTML: typeof defaultFormHTML = defaultFormHTML;
  defaultFormValidations: typeof defaultFormValidations = defaultFormValidations;

  selectAddress(place: google.maps.places.PlaceResult): void {
    // Place object from API
    console.log(place);

    // Text from input
    console.log(this.placesRef.el.nativeElement.value);
  }
}
