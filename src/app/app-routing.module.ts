import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "home", component: MainComponent },
  { path: "info", component: InfoComponent },
  { path: "contacto", component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
