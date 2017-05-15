import { Component, OnInit, Input, ContentChild, ViewChild } from '@angular/core';
import {MdSidenav} from '@angular/material';

import { MdDialogRef } from '@angular/material';
import {NgDialogSidebarPortal} from './components/ng-dialog-sidebar.portal';
import {NgDialogHeaderLeftPortal} from './components/ng-dialog-header-left.portal';
import {NgDialogHeaderRightPortal} from './components/ng-dialog-header-right.portal';
import {NgDialogContentPortal} from './components/ng-dialog-content.portal';
import {NgDialogFooterLeftPortal} from './components/ng-dialog-footer-left.portal';
import {NgDialogFooterRightPortal} from './components/ng-dialog-footer-right.portal';

@Component({
    selector: 'ng-dialog-container',
    templateUrl: './ng-dialog-container.component.html',
    styleUrls: ['./ng-dialog-container.component.css']
})
export class NgDialogContainerComponent implements OnInit {
    @Input('dialogRef') dialogRef: MdDialogRef<any>;
    @Input('loading') loading: Boolean;

    @ContentChild(NgDialogSidebarPortal) sidebarPortal;
    @ContentChild(NgDialogHeaderLeftPortal) headerLeftPortal;
    @ContentChild(NgDialogHeaderRightPortal) headerRightPortal;
    @ContentChild(NgDialogContentPortal) contentPortal;
    @ContentChild(NgDialogFooterLeftPortal) footerLeftPortal;
    @ContentChild(NgDialogFooterRightPortal) footerRightPortal;
    @ViewChild(MdSidenav) sidenav;
    constructor() { }

    ngOnInit() { }

}
