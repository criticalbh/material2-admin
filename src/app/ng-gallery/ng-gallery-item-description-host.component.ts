import {Component, ViewChild, Input, AfterViewChecked} from '@angular/core';
import {TemplatePortal, PortalHostDirective} from '@angular/material';

@Component({
  selector: 'gallery-item-description-body',
  template: `<ng-template cdkPortalHost></ng-template>`
})
export class GaleryItemDescriptionHostComponent implements AfterViewChecked {
  @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;
  @Input('content') _content: TemplatePortal;

  constructor() {

  }

  ngAfterViewChecked() {
    if (this._portalHost && !this._portalHost.hasAttached()) {
      this._portalHost.attach(this._content);
    }
  }

}
