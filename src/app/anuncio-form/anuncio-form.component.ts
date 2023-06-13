import { Component } from '@angular/core';
import { Anuncio } from '../anuncio';
import { AnuncioService } from '../anuncio.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioFormComponent {
  anuncioForm: FormGroup;
anuncio: any;

  constructor(
    private formBuilder: FormBuilder,
    private anuncioService: AnuncioService
  ) {
    this.anuncioForm = this.formBuilder.group({
      titulo: '',
      descricao: '',
      preco: '',
      localizacao: '',
      urlImagem: ''
    });
  }

  cadastrarAnuncio(): void {
    const anuncioData = this.anuncioForm.value;
    this.anuncioService.cadastrarAnuncio(anuncioData).subscribe(() => {
      // Lógica após o cadastro do anúncio, se necessário
      // Por exemplo, redirecionar para outra página ou exibir uma mensagem de sucesso
    }, (error) => {
      console.log('Erro ao cadastrar o anúncio:', error);
      // Lógica para lidar com erros no cadastro do anúncio, se necessário
      // Por exemplo, exibir uma mensagem de erro ou limpar o formulário
    });
  }
}

