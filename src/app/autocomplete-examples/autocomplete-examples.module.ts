import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteExamplesRoutingModule } from "./autocomplete-examples-routing.module";
import { AutocompleteExamplesComponent } from './autocomplete-examples.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { DefaultAutocompleteComponent } from './pages/default-autocomplete/default-autocomplete.component';
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";
import { MultipleCountriesComponent } from './pages/multiple-countries/multiple-countries.component';
import { MultipleInputsComponent } from './pages/multiple-inputs/multiple-inputs.component';

@NgModule({
  declarations: [
    AutocompleteExamplesComponent,
    SidebarComponent,
    DefaultAutocompleteComponent,
    MultipleCountriesComponent,
    MultipleInputsComponent
  ],
  imports: [
    CommonModule,
    AutocompleteExamplesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    NgxGpAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AutocompleteExamplesModule {
}
