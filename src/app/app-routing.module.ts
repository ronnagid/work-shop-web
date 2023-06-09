import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main-layout/main/main.component';

const routes: Routes = [{
  path: '',
  component:MainComponent,
  children:[{
    path:'dashboard',
    loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
