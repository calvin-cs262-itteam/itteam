import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'chicken-pot-pie', loadChildren: './chicken-pot-pie/chicken-pot-pie.module#ChickenPotPiePageModule' },
  { path: 'ramen', loadChildren: './ramen/ramen.module#RamenPageModule' },
  { path: 'pretzel', loadChildren: './pretzel/pretzel.module#PretzelPageModule' },
  { path: 'eggs-benedict', loadChildren: './eggs-benedict/eggs-benedict.module#EggsBenedictPageModule' },
  { path: 'moroccan-pastitsio', loadChildren: './moroccan-pastitsio/moroccan-pastitsio.module#MoroccanPastitsioPageModule' },
  { path: 'tuna-casserole', loadChildren: './tuna-casserole/tuna-casserole.module#TunaCasserolePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
