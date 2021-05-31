import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    menuActivado:boolean = false

    constructor( private router:Router ) { }

    ngOnInit(): void {
    }

    buscarGrupo( termino:string ){
        //console.log(termino);
        this.router.navigate(['/search', termino])
    }

}
