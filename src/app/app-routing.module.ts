import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: MainComponent },
  { path: "info", component: InfoComponent },
  { path: "contacto", component: ContactoComponent },
  { path: 'empleados/:empleadoId', component: EmpleadoComponent }, //Todo lo que haya depués de la barra, dices que es dinámica es decir: /:empleado
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
