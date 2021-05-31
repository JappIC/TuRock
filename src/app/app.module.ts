import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes globales
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Páginas
import { HomeComponent } from './components/pages/home/home.component';
import { GroupsComponent } from './components/pages/groups/groups.component';
import { GroupComponent } from './components/pages/group/group.component';
import { SearchComponent } from './components/pages/search/search.component';

// Reutilizables
import { GroupCardComponent } from './components/group-card/group-card.component';

// Servicios
import { GruposService } from './services/grupos.service';

// Idiomas
import '@angular/common/locales/global/es';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        GroupsComponent,
        FooterComponent,
        GroupComponent,
        SearchComponent,
        GroupCardComponent,
        DomseguroPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        GruposService,
        { provide: LOCALE_ID, useValue: 'es' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
