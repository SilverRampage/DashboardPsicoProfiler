import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component'
const routes: Routes = [];

const app_routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' }, //ruta raiz a la que siempre se va a dirigir
  { path: 'index', component: AppComponent }, //ruta publica

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
