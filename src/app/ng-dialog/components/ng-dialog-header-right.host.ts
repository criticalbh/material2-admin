import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {TemplatePortal, PortalHostDirective} from '@angular/material';

@Component({
    selector: 'ng-dialog-header-right-host',
    template: `
      <ng-template cdkPortalHost></ng-template>

`
})
export class NgDialogHeaderRightHost implements OnInit {
    @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;
    @Input('content') _content: TemplatePortal<any>;

    constructor() {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    ngAfterViewChecked() {
        if (this._portalHost && !this._portalHost.hasAttached()) {
            this._portalHost.attach(this._content);
        }
    }

}
