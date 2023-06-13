import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';

@Component({
  selector: 'app-lista-anuncio',
  templateUrl: './anuncio-lista.component.html',
  styleUrls: ['./anuncio-lista.component.css']
})
export class ListaAnuncioComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private anuncioService: AnuncioService) {}

  ngOnInit(): void {
    this.carregarAnuncios();
  }

  carregarAnuncios(): void {
    this.anuncioService.getAnuncios().subscribe(
      (anuncios: Anuncio[]) => {
        this.anuncios = anuncios;
      },
      (error: any) => {
        console.log('Erro ao carregar os anúncios:', error);
      }
    );
  }
}
