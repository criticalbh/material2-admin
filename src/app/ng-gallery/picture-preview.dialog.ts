import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'picture-preview',
  templateUrl: './picture-preview.dialog.html'
})
export class PicturePreviewDialog {
  descriptionComponent;
  imgUrl;
  navigateLeft: EventEmitter<any> = new EventEmitter();
  navigateRight: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

}
