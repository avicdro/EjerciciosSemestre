import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Materialize
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
// Componentes
import { DarVueltaANumeroComponent } from './dar-vuelta-anumero/dar-vuelta-anumero.component';

@NgModule({
  declarations: [
    AppComponent,
    DarVueltaANumeroComponent,
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
