import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Materialize
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
// Componentes
import { DarVueltaANumeroComponent } from './dar-vuelta-anumero/dar-vuelta-anumero.component';
import { BinarioADecimalComponent } from './binario-adecimal/binario-adecimal.component';
import { HipotenusaSegunCatetosComponent } from './hipotenusa-segun-catetos/hipotenusa-segun-catetos.component';
import { VelocidadSegunDistanciaTiempoComponent } from './velocidad-segun-distancia-tiempo/velocidad-segun-distancia-tiempo.component';
import { EcuacionesResolventeComponent } from './ecuaciones-de-segundo-grado-resolvente/ecuaciones-de-segundo-grado-resolvente.component';
import { EsCapicuaComponent } from './es-capicua/es-capicua.component';
import { SegundosTranscurridosComponent } from './segundos-transcurridos/segundos-transcurridos.component';
import { APagarEnEstacionamientoComponent } from './apagar-en-estacionamiento/apagar-en-estacionamiento.component';
import { IntervaloComponent } from './intervalo/intervalo.component';

@NgModule({
  declarations: [
    AppComponent,
    DarVueltaANumeroComponent,
    BinarioADecimalComponent,
    HipotenusaSegunCatetosComponent,
    VelocidadSegunDistanciaTiempoComponent,
    EcuacionesResolventeComponent,
    EsCapicuaComponent,
    SegundosTranscurridosComponent,
    APagarEnEstacionamientoComponent,
    IntervaloComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
