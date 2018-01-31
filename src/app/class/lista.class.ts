import { Listaitem } from './lista-item.class';

export class Lista{
	nombre:string;
	terminado:boolean;
	items: Listaitem[];

	constructor(nombre:string){
		this.nombre = nombre;
		this.terminado = false;
	}
}