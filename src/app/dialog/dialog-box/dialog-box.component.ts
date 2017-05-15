import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {NgBaseDialog} from '../../ng-dialog/ng-base-dialog.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent extends NgBaseDialog<DialogBoxComponent> implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogBoxComponent>,
              protected renderer: Renderer2,
              protected elementRef: ElementRef) {
    super(dialogRef, renderer, elementRef);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
