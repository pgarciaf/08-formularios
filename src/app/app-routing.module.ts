import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'template', component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
