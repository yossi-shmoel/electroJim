import { TextEditorComponent } from './../../shared/components/text-editor/text-editor.component';
import { PhotosHorizontalScrollComponent } from './../../shared/components/photos-horizontal-scroll/photos-horizontal-scroll.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import 'froala-editor/js/plugins.pkgd.min.js';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SharedComponent, PhotosHorizontalScrollComponent, TextEditorComponent],
  exports: [PhotosHorizontalScrollComponent, TextEditorComponent]
})
export class SharedModule { }
