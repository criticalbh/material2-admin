import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig} from '@angular/material';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {StandardDialogComponent} from './standard-dialog/standard-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openStandardDialog() {
    this.dialog.open(StandardDialogComponent);
  }

  openDialog() {
    let config: MdDialogConfig = new MdDialogConfig();
    config.height = '95%';
    config.width = '80%';
    config.disableClose = true;
    this.dialog.open(DialogBoxComponent, config);
  }

}
