import { Injectable } from '@angular/core';
import { Lista } from '../class/lista.class';

@Injectable()

export class ListaService  {
	
	listas:Lista[] = [];

	constructor() {
		this.getData();
	}

	public updateData(){
		localStorage.setItem('Lista', JSON.stringify(this.listas));
	}

	public getData(){
		if( localStorage.getItem('Lista') ){
			this.listas = JSON.parse( localStorage.getItem('Lista') );	
		}
	}

	public agregarLista(lista:Lista){
		this.listas.push(lista);
		this.updateData()
	}

	public deleteLista(id:number){
		this.listas.splice( id, 1 );
		this.updateData()
	}
}