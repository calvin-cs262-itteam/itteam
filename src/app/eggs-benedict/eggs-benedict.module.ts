import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EggsBenedictPage } from './eggs-benedict.page';

const routes: Routes = [
  {
    path: '',
    component: EggsBenedictPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EggsBenedictPage]
})
export class EggsBenedictPageModule {}
