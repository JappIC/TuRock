import { Injectable } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Injectable({
    providedIn: 'root'
})



export class GruposService {
    private grupos:Grupo[] = [
        {
            nombre: "Led Zeppelin",
            bio: `Led Zeppelin fue un grupo británico de hard rock fundado en Londres en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).

            Led Zeppelin presentó elementos de un amplio espectro de influencias, como el blues, el rock and roll, el soul, la música celta, la música india, el folk, y el country, siendo uno de los grupos seminales para el surgimiento del heavy metal.2​`,
            img: "https://i0.wp.com/stonemusic.it/wp-content/uploads/2017/07/zeppelin.jpg",
            aparicion: "1968-03-18",
            video:"https://www.youtube.com/embed/HQmmM_qwG4k",
            wiki: "https://es.wikipedia.org/wiki/Led_Zeppelin",
        },
        {
            nombre: "The Rolling Stones",
            bio: `The Rolling Stones es una banda británica de rock originaria de Londres. La banda se formó en abril de 19622​ por Brian Jones, Mick Jagger,
            Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.2​ Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después,
            siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ronnie Wood.
            Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo
            Lounge en 1994, no es un miembro oficial.`,
            img: "https://www.mondosonoro.com/wp-content/uploads/2020/10/RollingStonesWEB.jpg",
            aparicion: "1962-04-09",
            video:"https://www.youtube.com/embed/DYjfJfoWmt4",
            wiki: "https://es.wikipedia.org/wiki/The_Rolling_Stones",
        },
        {
            nombre: "Queen",
            bio: `Queen es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May,
            el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991,
            y Deacon, retirado en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la
            banda aún se considera activa.`,
            img: "https://www.duna.cl/media/2021/03/queen-f.jpg",
            aparicion: "1970-11-13",
            video: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
            wiki: "https://es.wikipedia.org/wiki/Queen",
        },
        {
            nombre: "Pink Floyd",
            bio: `Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Es considerada un ícono cultural del siglo XX y una de las bandas
            más influyentes y aclamadas en la historia de la música, obtuvieron gran popularidad gracias a su música psicodélica que evolucionó hacia el
            rock progresivo y rock sinfónico con el paso del tiempo. Es conocida por sus canciones de alto contenido filosófico, la experimentación sónica,
            las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo. Sus ventas sobrepasan los 350 millones de álbumes vendidos en
            todo el mundo,4​5​ 97,5 millones de ellos solamente en los Estados Unidos.​`,
            img: "https://monterreyrock.com/wp-content/uploads/2020/07/las-10-mejores-canciones-de-pink-floyd.jpg",
            aparicion: "1965-03-20",
            video:"https://www.youtube.com/embed/YR5ApYxkU-U",
            wiki: "https://es.wikipedia.org/wiki/Pink_Floyd",
        },
        {
            nombre: "Deep Purple",
            bio: `Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho
            subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath. Su música ha incorporado elementos del rock progresivo, rock
            sinfónico, rock psicodélico, blues rock, funk rock, britpop y la música clásica. Deep Purple ha vendido más de 150 millones de discos en todo
            el mundo.​`,
            img: "https://vinilomusical.com/wp-content/uploads/2021/03/El-regreso-de-Deep-Purple.jpg",
            aparicion: "1968-06-01",
            video: "https://www.youtube.com/embed/ikGyZh0VbPQ",
            wiki: "https://es.wikipedia.org/wiki/Deep_Purple",
        },
        {
            nombre: "AC/DC",
            bio: `AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm y Angus Young.

            Sus álbumes se han vendido en un total estimado de 200 millones de copias,3​4​ embarcándose en giras multitudinarias por todo el mundo, y sus éxitos
            han musicalizado varias producciones cinematográficas sobresalientes.5​6​7​8​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes
            espectáculos de primer orden.9​ Mucho de ello se debe al extravagante estilo de su guitarrista principal y símbolo visual, Angus Young; quien
            asume el rol de guitarrista principal durante los conciertos, gracias a sus dinámicos y adrenalínicos despliegues escénicos uniformado de
            colegial callejero.10​ Al comienzo, los conciertos y tiempos por los cuales sufrieron diversos cambios en su alineación.11​12​ En 1974, la llegada
            del cantante Bon Scott se convertiría en pieza clave del éxito del grupo. Su presencia en escena, lo convirtió en uno de los personajes más
            carismáticos de la historia del hard rock .13​14​15​ La formación se estabilizaría con Cliff Williams (bajo) y Phil Rudd.`,
            img: "https://www.rionegro.com.ar/wp-content/uploads/2020/11/zentauroepp55774017-icult201108171928-1604852547698.jpg",
            aparicion: "1972-01-01",
            video: "https://www.youtube.com/embed/gEPmA3USJdI",
            wiki: "https://es.wikipedia.org/wiki/AC/DC",
        },
        {
            nombre: "The Ramones",
            bio: `Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós
            años más tarde, en 1996.

            Pioneros y líderes del naciente punk,1​2​ cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas
            y letras muy simples o incluso sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado
            de los años 1970:3​4​ con sus largos solos de guitarra, las complejas canciones de rock progresivo y sus enigmáticas letras.5​ Su sonido se
            caracteriza por ser rápido y directo, con influencias del rockabilly de los años 1950, el surf rock, The Beatles, The Who, The Velvet
            Underground, las bandas de chicas de los años 1960 como The Shangri-Las y el garage protopunk de MC5 y The Stooges.`,
            img: "https://www.wkmradio.com/wp-content/uploads/2021/02/ramones1.jpg",
            aparicion: "1974-05-13",
            video: "https://www.youtube.com/embed/HJWFsZ_YUc4",
            wiki: "https://es.wikipedia.org/wiki/Ramones",
        },
        {
            nombre: "Kiss",
            bio: `Kiss (estilizado KISS) es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el
            guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.2​ Conocidos por su maquillaje
            facial y sus extravagantes trajes, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo,
            en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa. Si se tienen en cuenta los
            álbumes en solitario de 1978, Kiss ha conseguido treinta discos de oro de la RIAA hacia 2015 y se la considera la banda estadounidense
            que ha recibido más de estas certificaciones.nota 1​4​ El conjunto ha vendido más de 80 millones de álbumes en todo el mundo y veinticinco
            millones solo en los Estados Unidos.5​ A pesar de no haber alcanzado la primera posición del Billboard 200, ha situado veintiséis de sus trabajos
            entre los cuarenta primeros puestos.6​ Desde su formación, los miembros de Kiss asumieron personalidades acordes con los maquillajes y
            vestimenta que llevaban, así Simmons asumió el rol de «Demon», Stanley el de «Starchild», Criss el de «Catman» y Frehley el de «Space Ace»
            o «Spaceman».`,
            img: "https://www.radiocantilo.com/wp-content/uploads/2019/04/kiss-jen-rosenstein-2-1200x650.jpg",
            aparicion: "1973-01-01",
            video: "https://www.youtube.com/embed/ZhIsAZO5gl0",
            wiki: "https://es.wikipedia.org/wiki/Kiss",
        },
    ];

    /*
    * Metodo para mostrar los grupos
    * Si queremos ser más específicos con TS podemos asignarle :Grupo[] como un arreglo
    */
    getGrupos():Grupo[]{
        return this.grupos;
    }

    /*
    * Metodo para mostrar un grupo
    */
    getGrupo( idx: number ){
        return this.grupos[idx];
    }

    /*
    * Metodo para buscar un grupo
    */
    buscarGrupo( termino: string ):Grupo[]{
        let gruposArr:Grupo[] = [];
        // Pasamos todo el término a minúsculas
        termino = termino.toLowerCase();

        // Comprobamos si el término está en el arreglo del servicio
        for( let i = 0; i < this.grupos.length; i++){

            let grupo = this.grupos[i];

            let nombre = grupo.nombre.toLowerCase();

            if ( nombre.indexOf( termino )>= 0 ) {
                grupo.idx = i;
                gruposArr.push ( grupo )
            }
        }
        return gruposArr;
    }


}

export interface Grupo{
    nombre:     string;
    bio:        string;
    img:        string;
    aparicion:  string;
    video:      string;
    wiki:       string;
    idx?:       number;
}
