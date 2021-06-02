import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    // Heredamos del componente padre app,component
    @Input() titulo:string= "";
    @Input() anio: number= 0;

    // El menú se ocultará en dispositivos móviles, pero al hacer click en el logo se mostrará.
    menuActivado:boolean = false

    constructor( private router:Router ) { }

    ngOnInit(): void {
    }

    buscarGrupo( termino:string ){
        //console.log(termino);
        this.router.navigate(['/search', termino])
    }

}
