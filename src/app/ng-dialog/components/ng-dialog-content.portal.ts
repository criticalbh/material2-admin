import {Component, OnInit, TemplateRef, ViewContainerRef, ViewChild, Input} from '@angular/core';
import {TemplatePortal} from '@angular/material';

@Component({
    selector: 'ng-dialog-content',
    template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class NgDialogContentPortal implements OnInit {

    @ViewChild(TemplateRef) _content: TemplateRef<any>;

    private _contentPortal: TemplatePortal<any> = null;

    get content(): TemplatePortal<any> {
        return this._contentPortal;
    }

    constructor(private _viewContainerRef: ViewContainerRef) {
    }


    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }

}
