import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersonajes'
})
export class FiltroPersonajesPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(texto === ''){
      return lista;
    }

    return lista.filter(items => {
      return items.name.toLowerCase().includes(texto.toLowerCase());
    })
  }

}
