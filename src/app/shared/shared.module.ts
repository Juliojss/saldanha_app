import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './components/social-network/social-network/social-network.component';



@NgModule({
  declarations: [SocialNetworkComponent],
  imports: [
    CommonModule
  ],
  exports: [SocialNetworkComponent]
})
export class SharedModule { }
