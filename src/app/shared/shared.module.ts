import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './components/social-network/social-network/social-network.component';
import { ButtonWppComponent } from './components/button-wpp/button-wpp.component';



@NgModule({
  declarations: [
    SocialNetworkComponent,
    ButtonWppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialNetworkComponent,
    ButtonWppComponent
  ]
})
export class SharedModule { }
