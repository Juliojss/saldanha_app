import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';



@NgModule({
  declarations: [MenuAsideComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuAsideComponent
  ]
})
export class CoreModule { }
