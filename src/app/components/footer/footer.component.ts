import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    // Heredamos del componente padre app,component
    @Input() titulo:string= "";
    @Input() anio: number= 0;

    constructor() {
    }

    ngOnInit(): void {
    }

}
