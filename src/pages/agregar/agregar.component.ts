import { Component, OnInit } from '@angular/core';
import { Listaitem, Lista } from '../../app/class/export';
import { AlertController, NavController } from 'ionic-angular';
import { ListaService } from '../../app/services/lista-deseos.service';

@Component({
  	selector: 'app-agregar',
  	templateUrl: './agregar.component.html',
  	styles: []
})
export class AgregarComponent implements OnInit{
    
    nombreLista:string = "";
    nombreItem:string = "";

    listaItems:Listaitem[] = [];

    constructor(public alertCtrl: AlertController,
				public _navController: NavController,
				public _listaService: ListaService){}
    
    ngOnInit(){}

    public agregarItem(){
    	if(this.nombreItem.length < 1){
    		return;
    	}

    	let item = new Listaitem();
    	item.nombre = this.nombreItem;
    	this.listaItems.push(item); 
    	this.nombreItem = "";
    }

    public eliminarItem(i:number){
    	this.listaItems.splice(i,1);
    }

    public guardarLista(){
    	if(this.nombreLista.length == 0){
    		let alert = this.alertCtrl.create({
		      	title: 'Lista',
		      	subTitle: 'El nombre de la lista es necesario.',
		     	buttons: ['OK']
		    	});
		    alert.present();
    		return;
    	}

    	let lista = new Lista( this.nombreLista );
    	lista.items = this.listaItems;

    	this._listaService.agregarLista( lista );

    	this._navController.pop();
    }
}