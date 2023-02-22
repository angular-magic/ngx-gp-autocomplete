export const defaultFormHTML = `
    <div class="tab-content">
      <mat-form-field appearance="fill">
        <mat-label>Address</mat-label>
        <input #ngxPlaces="ngx-places"
               class="input"
               type="text"
               matInput
               [formControl]="autocompleteInputControl"
               ngx-gp-autocomplete
               (onAddressChange)="selectAddress($event)">

      </mat-form-field>
    </div>
`;

export const defaultFormValidations = `
    import { Component, ViewChild } from '@angular/core';
    import { NgxGpAutocompleteDirective } from "@angular-magic/ngx-gp-autocomplete";
    import { FormControl } from "@angular/forms";

    @Component({
      selector: 'app-default-autocomplete',
      templateUrl: './default-autocomplete.component.html',
      styleUrls: ['./default-autocomplete.component.scss']
    })
    export class DefaultAutocompleteComponent {
      autocompleteInputControl: FormControl = new FormControl<string>('');
      @ViewChild('ngxPlaces') placesRef: NgxGpAutocompleteDirective;


      selectAddress(place: google.maps.places.PlaceResult): void {
        // Place object from API
        console.log(place);

        // Text from input
        console.log(this.placesRef.el.nativeElement.value);
      }
    }
`;
