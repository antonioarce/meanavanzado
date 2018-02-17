import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
  ngOnDestroy(): void {
    console.log('Metodo OnDestroy se lanzo');
  }
  ngDoCheck(): void {
    console.log('Metodo DoCheck se lanzo');
  }
  ngOnInit(): void {
    console.log('Metodo OnInit lanzado');
  }

  @Input() public nombre: string;
  @Input('metroscuadrados') public metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor(){
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'alta';
    this.abierto = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Existen cambios en las propiedades');
  }

  emitirEvento(){
    this.pasameLosDatos.emit({
      'nombre' : 'Parque natural para caballos',
      'metros' : 450,
      'vegetacion' : 'alta',
      'abierto' : true,
    });
  }
}
