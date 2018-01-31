import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { FiltroPipe } from './pipes/pendientes.pipe';
import { TabsPage } from '../pages/tabs/tabs';
import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { DetallesComponent } from '../pages/detalles/detalles.component';

import { ListaService } from './services/lista-deseos.service';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PlaceholderPipe,
    FiltroPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetallesComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetallesComponent,
    TabsPage
  ],
  providers: [
    ListaService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
