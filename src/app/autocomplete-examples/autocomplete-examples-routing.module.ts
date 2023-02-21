import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteExamplesComponent } from "./autocomplete-examples.component";

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
        component: DefaultValidatorComponent,
      },
      {
        path: 'custom',
        component: CustomValidatorComponent,
      },
      {
        path: 'run-time',
        component: RunTimeValidatorComponent,
      },
      {
        path: 'backend',
        component: BackendValidatorComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutocompleteExamplesRoutingModule {
}
