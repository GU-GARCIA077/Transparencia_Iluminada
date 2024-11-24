import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Pages/home/home.component';
import { RelatoComponent } from './Pages/relato/relato.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'Relato',
        component:RelatoComponent,
        title:'Relato'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}