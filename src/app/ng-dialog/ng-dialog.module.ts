import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdSidenavModule, MdIconModule, MdToolbarModule, MdProgressSpinnerModule, PortalModule} from '@angular/material';
import {NgDialogContainerComponent} from './ng-dialog-container.component';
import {NgDialogSidebarPortal} from './components/ng-dialog-sidebar.portal';
import {NgDialogSidebarHost} from './components/ng-dialog-sidebar.host';
import {NgDialogHeaderLeftPortal} from './components/ng-dialog-header-left.portal';
import {NgDialogHeaderLeftHost} from './components/ng-dialog-header-left.host';
import {NgDialogHeaderRightPortal} from './components/ng-dialog-header-right.portal';
import {NgDialogHeaderRightHost} from './components/ng-dialog-header-right.host';
import {NgDialogContentPortal} from './components/ng-dialog-content.portal';
import {NgDialogContentHost} from './components/ng-dialog-content.host';
import {NgDialogFooterLeftHost} from './components/ng-dialog-footer-left.host';
import {NgDialogFooterLeftPortal} from './components/ng-dialog-footer-left.portal';
import {NgDialogFooterRightPortal} from './components/ng-dialog-footer-right.portal';
import {NgDialogFooterRightHost} from './components/ng-dialog-footer-right.host';


@NgModule({
  imports: [CommonModule, MdSidenavModule, MdIconModule, MdToolbarModule, PortalModule, MdProgressSpinnerModule],
  exports: [NgDialogContainerComponent,
    NgDialogSidebarPortal, NgDialogHeaderLeftPortal, NgDialogHeaderRightPortal, NgDialogContentPortal, NgDialogFooterLeftPortal, NgDialogFooterRightPortal],
  declarations: [NgDialogContainerComponent,
    NgDialogSidebarPortal, NgDialogSidebarHost,
    NgDialogHeaderLeftPortal, NgDialogHeaderLeftHost,
    NgDialogHeaderRightPortal, NgDialogHeaderRightHost,
    NgDialogContentPortal, NgDialogContentHost,
    NgDialogFooterLeftPortal, NgDialogFooterLeftHost,
    NgDialogFooterRightPortal, NgDialogFooterRightHost],
  providers: [],

})
export class NgDialogModule {
}
