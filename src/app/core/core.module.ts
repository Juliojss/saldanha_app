import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [MenuAsideComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    MenuAsideComponent
  ]
})
export class CoreModule { }
