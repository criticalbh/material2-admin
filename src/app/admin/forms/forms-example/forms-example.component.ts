import {Component, Input, OnInit} from '@angular/core';
import {DummyModel} from "../../../models/dummy.model";

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent implements OnInit {
  @Input() dummies: DummyModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
