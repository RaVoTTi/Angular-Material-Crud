export interface RESTLocation {
  count:     number;
  locations: Location[];
}
export const locationGeneric: Location = {
  _id:         'Mongo ID',
  title:       'Valle Hermoso',
  description: 'Es hermoso',
  number:      '21431312123',
  schedule:    '123213',
  urlImage:    'url de la image',
  urlLocation: 'url de google Maps',

};


export interface Location {
  _id:         string;
  title:       string;
  description: string;
  division?:    IdName;
  number:      string;
  schedule:    string;
  urlImage:    string;
  urlLocation: string;
  user?:        IdName;
}

export interface IdName {
  _id:  string;
  name: string;
}
