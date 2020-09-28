import { PhotosHorizontalScrollComponent } from './../../shared/components/photos-horizontal-scroll/photos-horizontal-scroll.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, PhotosHorizontalScrollComponent],
  exports: [PhotosHorizontalScrollComponent]
})
export class SharedModule { }
