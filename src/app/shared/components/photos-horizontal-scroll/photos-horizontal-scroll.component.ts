import { PhotoData } from './../../models/photo-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-horizontal-scroll',
  templateUrl: './photos-horizontal-scroll.component.html',
  styleUrls: ['./photos-horizontal-scroll.component.scss']
})
export class PhotosHorizontalScrollComponent implements OnInit {

  @Input() images: Array<PhotoData>;
  @Input() style: string;
  constructor() { }

  ngOnInit(): void {

    this.images = new Array<PhotoData>();
    this.style = 'width:50%';


    for (let i = 0; i < 5; i++){
     this.images.push(new PhotoData('', `/assets/mocks/images/s${i}.jpg`));
   }

  }

}
