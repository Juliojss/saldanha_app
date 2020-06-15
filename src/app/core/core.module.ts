import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuAsideComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MenuAsideComponent
  ]
})
export class CoreModule { }
