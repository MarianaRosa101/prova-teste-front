import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioListaComponent } from './anuncio-lista.component';

describe('AnuncioListaComponent', () => {
  let component: AnuncioListaComponent;
  let fixture: ComponentFixture<AnuncioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuncioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
