import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'manish-patidar', loadChildren: './modules/portfolio-components/portfolio-components.module#PortfolioComponentsModule' },
  { path: '',  loadChildren: () => import('./modules/portfolio-components/portfolio-components.module').then(m => m.PortfolioComponentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
