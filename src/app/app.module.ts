import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AfiliadosComponent } from './pages/afiliados/afiliados.component';
import { NegocioComponent } from './pages/negocio/negocio.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltroCategoriaPipe } from './pipes/filtro-categoria.pipe';
import { FiltroDosPipe } from './pipes/filtro-dos.pipe';
import { FiltroTresPipe } from './pipes/filtro-tres.pipe';
import { FiltroCuatroPipe } from './pipes/filtro-cuatro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AfiliadosComponent,
    NegocioComponent,
    FiltroPipe,
    FiltroCategoriaPipe,
    FiltroDosPipe,
    FiltroTresPipe,
    FiltroCuatroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
