import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MenuAsideComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MenuAsideComponent
  ]
})
export class CoreModule { }
