import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { Lista } from '../../app/class/export';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  	selector: 'app-terminados',
  	templateUrl: './terminados.component.html',
  	styles: []
})
export class TerminadosComponent implements OnInit{
    constructor(public _listaService: ListaService,
    			private _navController: NavController){}

    ngOnInit(){}

    public agregar(){
    	this._navController.push( AgregarComponent );
    }

    public showDetails(lista:Lista, id:number){
    	this._navController.push( DetallesComponent, {lista: lista, id: id} );
    }
}