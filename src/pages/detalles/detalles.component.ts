import { Component, OnInit } from '@angular/core';	
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, Listaitem} from '../../app/class/export';
import { ListaService } from '../../app/services/lista-deseos.service';

@Component({
	selector: 'app-detalles',
	templateUrl: 'detalles.component.html'
})

export class DetallesComponent implements OnInit{
	
	id:number;
	lista:Lista;

	constructor(public _navController: NavController,
				public _navParams: NavParams,
				public _listaService: ListaService,
				public _alertController: AlertController){

		this.id = this._navParams.get('id');
		this.lista = this._navParams.get('lista');
	}
	ngOnInit(){}

	public update(item:Listaitem ){
		item.terminado = !item.terminado;
		let fin:boolean = true;
		for(let item of this.lista.items){
			if(!item.terminado){
				fin = false;
				break;
			}
		}
		this.lista.terminado = fin;
		this._listaService.updateData();
	}

	public eraseList(){
		let confirm = this._alertController.create({
      	title: 'Eliminar lista: ' + this.lista.nombre,
     	message: '¿Estás seguro de quere eliminar la lista?',
      	buttons: ['Cancelar',
	        {
	        	text: 'Eliminar',
	          	handler: () => {
	            	this._listaService.deleteLista( this.id );
	            	this._navController.pop();
	          	}
	        }
      	]
    	});
    	confirm.present();
	}
}