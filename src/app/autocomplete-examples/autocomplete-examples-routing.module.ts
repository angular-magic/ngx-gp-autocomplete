import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteExamplesComponent } from "./autocomplete-examples.component";
import { DefaultAutocompleteComponent } from "./pages/default-autocomplete/default-autocomplete.component";
import { MultipleCountriesComponent } from "./pages/multiple-countries/multiple-countries.component";
import { MultipleInputsComponent } from "./pages/multiple-inputs/multiple-inputs.component";

const routes: Routes = [
  {
    path: '',
    component: AutocompleteExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        component: DefaultAutocompleteComponent,
      },
      {
        path: 'custom-options',
        component: MultipleCountriesComponent,
      },
      {
        path: 'multiple',
        component: MultipleInputsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutocompleteExamplesRoutingModule {
}
