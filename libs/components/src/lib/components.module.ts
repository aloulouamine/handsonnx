import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
@NgModule({
  imports: [CommonModule],
  declarations: [ProfileCardComponent],
  exports:[ProfileCardComponent]
})
export class ComponentsModule {}
