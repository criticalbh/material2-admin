import {Component, OnInit, TemplateRef, ViewContainerRef, ViewChild, Input, ContentChild} from '@angular/core';
import {TemplatePortal} from '@angular/material';
import {GalleryItemDescriptionPortalComponent} from './ng-gallery-item-description-portal.component';

@Component({
  selector: 'gallery-item',
  template: `<ng-template><ng-content></ng-content></ng-template>`
})
export class GalleryItemComponent implements OnInit {
  @ViewChild(TemplateRef) _content: TemplateRef<any>;
  @ContentChild(GalleryItemDescriptionPortalComponent) descriptionItem;

  @Input('src') private _src;
  @Input('thumb') private _thumb;
  @Input('alt') private _alt;

  private _contentPortal: TemplatePortal = null;

  get content(): TemplatePortal {
    return this._contentPortal;
  }


  get src() {
    return this._src;
  }


  get thumb() {
    return this._thumb;
  }

  get alt() {
    return this._alt;
  }

  constructor(private _viewContainerRef: ViewContainerRef) {
  }


  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
  }

}
