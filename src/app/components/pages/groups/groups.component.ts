import { hostViewClassName, ParseSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


// Servicios
import { GruposService, Grupo } from '../../../services/grupos.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

    urlRuta:string = this.router.url;
    // Añadimos un arreglo de tipo Grupo con una interface
    grupos:Grupo[] = [];

    constructor(
        private _gruposService:GruposService,
        private router:Router
    ) {  }

    ngOnInit(): void {

        // Llamamos a los datos de grupos
        this.grupos = this._gruposService.getGrupos();
        //console.log( this.grupos );

    }

    // Acción para ver el grupo seleccionado
    verGrupo( idx:number ){
        this.router.navigate(['/group',idx])
    }
}
