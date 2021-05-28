import { Component, OnInit } from '@angular/core';

// Servicios
import { GruposService, Grupo } from '../../../services/grupos.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

    grupos:Grupo[] = [];

    constructor( private _gruposService:GruposService) {  }

    ngOnInit(): void {

        // Llamamos a los datos de grupos
        this.grupos = this._gruposService.getGrupos();

        console.log( this.grupos );

    }
}
