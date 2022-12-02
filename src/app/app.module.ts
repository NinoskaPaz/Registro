import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltroPersonajesPipe } from './pipes/filtro-personajes.pipe';
import localeES from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

registerLocaleData(localeES,'es');


@NgModule({
  declarations: [AppComponent, FiltroPersonajesPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),],
  providers: [
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    { provide: LOCALE_ID, useValue:'es-CL'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
