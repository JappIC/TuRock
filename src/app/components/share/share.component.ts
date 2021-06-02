import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

    urlWeb:string = "http://localhost:4200";
    @Input() urlRuta:string = "";

    constructor(
        private router:Router
    ) { }

    ngOnInit(): void {
    }
}
