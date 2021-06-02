import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Servicios
import { GruposService } from '../../../services/grupos.service';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css'],
    host: {'class': 'app-contenedor'},
})
export class GroupComponent implements OnInit {

    urlRuta:string = this.router.url;
    grupo:any = {};

    constructor(
        private activatedRoute:ActivatedRoute,
        private _gruposService:GruposService,
        private router:Router
    ){

        // observador: Esta pendiente de los cambios
        this.activatedRoute.params.subscribe( params =>{
            //console.log(params['id']);
            this.grupo = this._gruposService.getGrupo( params['id'] );
            console.log(this.grupo);

        })

    }

    ngOnInit(): void {
    }

}
