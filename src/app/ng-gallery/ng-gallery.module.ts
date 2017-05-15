import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdDialogModule, MdIconModule, MdButtonModule, MdCoreModule} from '@angular/material';
import {PicturePreviewDialog} from './picture-preview.dialog';
import {GalleryContainerComponent} from './ng-gallery-container.component';
import {GalleryItemDescriptionPortalComponent} from './ng-gallery-item-description-portal.component';
import {GalleryItemComponent} from './ng-gallery-item.component';
import {GaleryItemDescriptionHostComponent} from './ng-gallery-item-description-host.component';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    MdButtonModule,
    MdIconModule,
    MdCoreModule
  ],
  declarations: [
    PicturePreviewDialog,
    GalleryContainerComponent,
    GalleryItemComponent,
    GalleryItemDescriptionPortalComponent,
    GaleryItemDescriptionHostComponent,
  ],
  exports: [GalleryItemComponent, GalleryContainerComponent, GalleryItemDescriptionPortalComponent, GaleryItemDescriptionHostComponent],
  entryComponents: [PicturePreviewDialog]
})
export class NgGalleryModule {

}
