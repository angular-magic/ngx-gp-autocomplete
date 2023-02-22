export const defaultFormHTML = `
    <div class="tab-content">
      Bellow you can find how to set default options for all your autocomplete inputs.

      <div class="wrapper">
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input class="input"
                 type="text"
                 matInput
                 [formControl]="autocompleteInputControl"
                 ngx-gp-autocomplete
                 (onAddressChange)="selectAddress($event)">

        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Address 2</mat-label>
          <input class="input"
                 type="text"
                 matInput
                 [formControl]="secondAutocompleteInputControl"
                 ngx-gp-autocomplete
                 (onAddressChange)="selectAddress($event)">

        </mat-form-field>
      </div>
    </div>
`;

export const defaultFormValidations = `
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
`;
