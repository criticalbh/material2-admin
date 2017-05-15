import {MdDialogRef} from '@angular/material';
import {OnInit, ElementRef, Renderer2} from '@angular/core';
export class NgBaseDialog<T> implements OnInit {
  constructor(public dialogRef: MdDialogRef<T>, protected renderer: Renderer2, protected elementRef: ElementRef) {
  }

  ngOnInit() {
    let mdDialogContainer = this.elementRef.nativeElement.parentElement;
    this.renderer.setStyle(mdDialogContainer, 'height', '100%');
    this.renderer.setStyle(mdDialogContainer, 'padding', '0');
  }
}
