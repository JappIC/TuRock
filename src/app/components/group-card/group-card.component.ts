import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-group-card',
    templateUrl: './group-card.component.html',
    styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {

    @Input() grupo:any = {}
    @Input() index:number = 0;

    @Output() grupoSeleccionado: EventEmitter<number>

    constructor( private router:Router ) {
        this.grupoSeleccionado = new EventEmitter();
    }

    ngOnInit(): void {
    }

    verGrupo(){
        this.router.navigate(['/group', this.index]);
        //this.grupoSeleccionado.emit( this.index );
    }

}
