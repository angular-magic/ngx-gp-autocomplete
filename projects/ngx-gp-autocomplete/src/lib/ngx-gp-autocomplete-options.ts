export interface NgxGpAutocompleteOptions {
  bounds?: google.maps.LatLngBounds;
  componentRestrictions?: google.maps.places.ComponentRestrictions;
  types?: string[];
  fields?: string[];
  strictBounds?: boolean;
  origin?: google.maps.LatLng;
}
