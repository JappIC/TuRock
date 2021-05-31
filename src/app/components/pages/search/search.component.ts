import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Servicios
import { GruposService } from '../../../services/grupos.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    grupos:any[] = [];
    termino:string = "";

    constructor(
        private activateRoute:ActivatedRoute,
        private _gruposService:GruposService
    ) { }

    ngOnInit(): void {
        this.activateRoute.params.subscribe( params =>{
            //console.log(params['termino']);
            this.termino = params['termino']
            this.grupos = this._gruposService.buscarGrupo( params['termino'] );
            //console.log(this.grupos);
        })
    }

}
