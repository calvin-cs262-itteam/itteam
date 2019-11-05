import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TunaCasserolePage } from './tuna-casserole.page';

const routes: Routes = [
  {
    path: '',
    component: TunaCasserolePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TunaCasserolePage]
})
export class TunaCasserolePageModule {}
