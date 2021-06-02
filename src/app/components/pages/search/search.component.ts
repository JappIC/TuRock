import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Servicios
import { GruposService } from '../../../services/grupos.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    urlRuta:string = this.router.url;
    grupos:any[] = [];
    termino:string = "";
    descripcionH:string = '';

    constructor(
        private activateRoute:ActivatedRoute,
        private _gruposService:GruposService,
        private router:Router
    ) { }

    ngOnInit(): void {
        this.activateRoute.params.subscribe( params =>{
            //console.log(params['termino']);
            this.termino = params['termino']
            this.grupos = this._gruposService.buscarGrupo( params['termino'] );

            // Comprobamoos el resultado de busqueda y lanzamos un mensaje
            if( this.grupos.length == 0 ){
                this.descripcionH = "Tronco, este grupo no existe";
            } else {
                this.descripcionH = "Se encontraron los siguientes grupos con el termino "+this.termino;
            }
            //console.log(this.grupos);
        })
    }

}
