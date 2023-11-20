import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponentSeguimiento } from './Seguimiento/listar/listar.component';
import { LoginComponent } from './login/login.component';
import { FilterComponent } from './filter/filter.component';
import { AddComponentSeguimiento } from './Seguimiento/add/add.component';
import { EditComponentSeguimiento } from './Seguimiento/edit/edit.component';

const routes: Routes = [

  {path:'listarVehiculo', component: ListarComponentSeguimiento},
  {path:'addVehiculo', component: AddComponentSeguimiento},
  {path:'login', component: LoginComponent},
  {path:'filterVehiculo', component: FilterComponent},
  {path:'vehiculo/edit/:id', component: EditComponentSeguimiento},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir al componente de inicio de sesión por defecto.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
