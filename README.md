# ngx-gp-autocomplete
<p align="center">
  <img alt="Ngx-Markdown Logo" src="https://ngx-validator.angularmagic.com/assets/cover.png">
</p>

**Demo: https://ngx-gp-autocomplete.angularmagic.com**

This module is a wrapper for Google Places Autocomplete js library. Initial code base was copied from this project
[ngx-google-places-autocomplete](https://www.npmjs.com/package/ngx-google-places-autocomplete), this module applies some fixes and improvements.
Like [@types/google.maps](https://www.npmjs.com/package/@types/google.maps) and [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader)

[![NPM](https://nodei.co/npm/@angular-magic/ngx-gp-autocomplete.png)](https://nodei.co/npm/@angular-magic/ngx-gp-autocomplete/)

# Installation
#### npm
```
npm install @angular-magic/ngx-gp-autocomplete
```

```
npm install @googlemaps/js-api-loader
```

```
npm install --save @types/google.maps
```


# Integration
1. Import NgxGpAutocompleteModule into your application module

```ts
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";

@NgModule({
  imports: [
    NgxGpAutocompleteModule.forRoot({ 
      loaderOptions: { 
            apiKey: 'YOUR_API_KEY',
            libraries: ['places']
        } 
    }),
    BrowserModule,
    FormsModule,
    ...],
  ....
})
```
2. Replace YOUR_API_KEY with google places api key. Ref - https://developers.google.com/places/web-service/get-api-key

2. Add directive ngx-gp-autocomplete to your input field (options is an optional parameter)
```
<input #placesRef="ngx-places" ngx-gp-autocomplete [options]='options' (onAddressChange)="handleAddressChange($event)"/>
```
3. Additionally you can reference directive in your component
```ts
    @ViewChild("placesRef") placesRef : NgxGpAutocompleteDirective;
    
        public handleAddressChange(place: google.maps.places.PlaceResult) {
        // Do some stuff
    }
```

# GitHub
Please feel free to declare issues or contribute: https://github.com/angular-magic/ngx-gp-autocomplete
