import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    titulo:string = 'TuRock';
    anio: number;

    constructor() {
        this.anio = new Date().getFullYear()
    }
}
