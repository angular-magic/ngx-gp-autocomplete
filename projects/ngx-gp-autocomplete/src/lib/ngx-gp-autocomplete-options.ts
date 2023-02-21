export class NgxGpAutocompleteOptions {
  public bounds: google.maps.LatLngBounds;
  public componentRestrictions: google.maps.places.ComponentRestrictions;
  public types: string[];
  public fields: string[];
  public strictBounds: boolean;
  public origin: google.maps.LatLng;

  public constructor(opt?: Partial<NgxGpAutocompleteOptions>) {
    if (!opt)
      return;

    Object.assign(this, opt);
  }
}
