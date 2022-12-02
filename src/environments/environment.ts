// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_KEY:'1c1d887100adfa95cf60baabc069960b',
  API_URL:'https://api.openweathermap.org/data/2.5/',
//nose si funciona la firebase debido a que nose si se conecto bien 
  firebase: {
    apiKey: "AIzaSyCKsN-O0kLqqWiaOhFJWnml4QyBGZRJYso",
    authDomain: "perosanas.firebaseapp.com",
    projectId: "perosanas",
    storageBucket: "perosanas.appspot.com",
    messagingSenderId: "849708102570",
    appId: "1:849708102570:web:86efb38f1e95d5ee4631d3",
    measurementId: "G-XP4PJF4PPK"

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
