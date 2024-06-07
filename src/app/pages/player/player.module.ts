import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './plater.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PlayerRotas)],
  declarations: [PlayerComponent],
})
export class PlayerModule {}
