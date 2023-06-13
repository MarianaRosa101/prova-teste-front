import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnuncioFormComponent } from './anuncio-form/anuncio-form.component';
import { AnuncioListaComponent } from './anuncio-lista.component';
import { AnuncioService } from './anuncio.service';

@NgModule({
  declarations: [
    AppComponent,
    NgModule,
    AnuncioFormComponent,
    AnuncioListaComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AnuncioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
