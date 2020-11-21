import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxFromComponent } from './rx-from.component';



@NgModule({
  declarations: [
    RxFromComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RxFromComponent,
  ],
})
export class RxFromModule { }
