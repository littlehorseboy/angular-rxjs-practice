import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxSubjectMulticastRefCountComponent } from './rx-subject-multicast-ref-count.component';



@NgModule({
  declarations: [
    RxSubjectMulticastRefCountComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RxSubjectMulticastRefCountComponent,
  ],
})
export class RxSubjectMulticastRefCountModule { }
