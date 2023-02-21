import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteExamplesRoutingModule } from "./autocomplete-examples-routing.module";
import { AutocompleteExamplesComponent } from './autocomplete-examples.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AutocompleteExamplesComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AutocompleteExamplesRoutingModule
  ]
})
export class AutocompleteExamplesModule {
}
