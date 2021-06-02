import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes globales
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

// Páginas
import { HomeComponent } from './components/pages/home/home.component';
import { GroupsComponent } from './components/pages/groups/groups.component';
import { GroupComponent } from './components/pages/group/group.component';
import { SearchComponent } from './components/pages/search/search.component';

// Reutilizables
import { GroupCardComponent } from './components/group-card/group-card.component';
import { ShareComponent } from './components/share/share.component';
import { FormGroupComponent } from './components/pages/group/form-group/form-group.component';

// Servicios
import { GruposService } from './services/grupos.service';

// Idiomas
import '@angular/common/locales/global/es';

// Pipes
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
        DomseguroPipe,
        HeaderComponent,
        ShareComponent,
        FormGroupComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        GruposService,
        { provide: LOCALE_ID, useValue: 'es' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
