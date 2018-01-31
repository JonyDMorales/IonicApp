import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../class/export';

@Pipe({
  	name: 'filtro',
  	pure: false
})

export class FiltroPipe implements PipeTransform {

	constructor(){ }

  	transform(listas:Lista[], estado:boolean = false): Lista[] {
		let nuevaListas:Lista[] = [];

		for(let lista of listas){
			if(lista.terminado == estado){
				nuevaListas.push(lista);
			}
		}
		return nuevaListas;
  	}

}