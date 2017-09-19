import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {TemplatePortal, PortalHostDirective} from '@angular/material';

@Component({
    selector: 'ng-dialog-footer-left-host',
    template: `
      <ng-template cdkPortalHost></ng-template>

`
})
export class NgDialogFooterLeftHost implements OnInit {
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
