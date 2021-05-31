import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { GroupsComponent } from './components/pages/groups/groups.component';
import { GroupComponent } from './components/pages/group/group.component';
import { SearchComponent } from './components/pages/search/search.component';


const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'groups',           component: GroupsComponent },
    { path: 'group/:id',        component: GroupComponent },
    { path: 'search/:termino',  component: SearchComponent },

    // Rectirecciona a la home
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    // Usa (routes), { useHash:true } si falla cuando usemos parámetros
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
