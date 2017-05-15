import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from '@angular/material';

@Component({
  selector: 'gallery-item-description',
  template: `<ng-template><ng-content></ng-content></ng-template>`
})
export class GalleryItemDescriptionPortalComponent implements OnInit {
  private _contentPortal: TemplatePortal = null;
  @ViewChild(TemplateRef) _content: TemplateRef<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
  }


  get content(): TemplatePortal {
    return this._contentPortal;
  }

}
