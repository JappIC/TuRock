import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { GroupsComponent } from './components/pages/groups/groups.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'groups', component: GroupsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    // Usa (routes), { useHash:true } si falla cuando usemos parámetros
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
