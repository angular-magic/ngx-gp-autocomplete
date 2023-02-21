import { Component, ViewChild } from '@angular/core';
import {
  NgxGpAutocompleteDirective,
  NgxGpAutocompleteOptions,
  NgxGpAutocompleteService
} from "@angular-magic/ngx-gp-autocomplete";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-google-place';
  autocompleteInput: string;
  @ViewChild('ngxPlaces') placesRef: NgxGpAutocompleteDirective;


  constructor(
    private ngxGpAutocompleteService: NgxGpAutocompleteService,
  ) {
    this.ngxGpAutocompleteService.setOptions({ componentRestrictions: { country: ['MD', 'RO'] } });
  }

  options = {
    componentRestrictions: {
      country: ['MD'],
    },
  } as NgxGpAutocompleteOptions;

  selectAddress(place: google.maps.places.PlaceResult): void {
    // Place object from API
    console.log(place);

    // Text from input
    console.log(this.placesRef.el.nativeElement.value);
  }
}
