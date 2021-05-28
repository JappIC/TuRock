import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class GruposService {
    private grupos:Grupo[] = [
        {
            nombre: "Led Zeppelin",
            bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
            img: "https://i0.wp.com/stonemusic.it/wp-content/uploads/2017/07/zeppelin.jpg",
            aparicion: "1939-05-01",
            video:"DC"
        },
        {
            nombre: "The Rolling Stones",
            bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "https://www.mondosonoro.com/wp-content/uploads/2020/10/RollingStonesWEB.jpg",
            aparicion: "1941-11-01",
            video:"DC"
        },
        {
            nombre: "Queen",
            bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
            img: "https://www.duna.cl/media/2021/03/queen-f.jpg",
            aparicion: "1964-01-01",
            video: "Marvel"
        },
        {
            nombre: "Pink Floyd",
            bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
            img: "https://monterreyrock.com/wp-content/uploads/2020/07/las-10-mejores-canciones-de-pink-floyd.jpg",
            aparicion: "1962-05-01",
            video:"Marvel"
        },
        {
            nombre: "Deep Purple",
            bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
            img: "https://vinilomusical.com/wp-content/uploads/2021/03/El-regreso-de-Deep-Purple.jpg",
            aparicion: "1940-06-01",
            video: "DC"
        },
        {
            nombre: "AC/DC",
            bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
            img: "https://www.rionegro.com.ar/wp-content/uploads/2020/11/zentauroepp55774017-icult201108171928-1604852547698.jpg",
            aparicion: "1962-08-01",
            video: "Marvel"
        },
        {
            nombre: "The Ramones",
            bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
            img: "https://www.wkmradio.com/wp-content/uploads/2021/02/ramones1.jpg",
            aparicion: "1962-08-01",
            video: "Marvel"
        },
        {
            nombre: "Kiss",
            bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
            img: "https://www.radiocantilo.com/wp-content/uploads/2019/04/kiss-jen-rosenstein-2-1200x650.jpg",
            aparicion: "1962-08-01",
            video: "Marvel"
        },
    ];

    /*
    * Metodo para mostrar los grupos
    *
    * Si queremos ser más específicos con TS podemos asignarle :Grupo[] como un arreglo
    */
    getGrupos():Grupo[]{
        return this.grupos;
    }

}

export interface Grupo{
    nombre:     string;
    bio:        string;
    img:        string;
    aparicion:  string;
    video:      string;
}
