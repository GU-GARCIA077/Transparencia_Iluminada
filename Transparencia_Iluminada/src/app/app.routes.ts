import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}