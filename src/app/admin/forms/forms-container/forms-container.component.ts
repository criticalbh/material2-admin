import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppState} from "../../../reducers/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {DummyModel} from "../../../models/dummy.model";
import * as dummyActions from "../../../actions/dummy.action";
import * as dummySelectors from "../../../selectors/dummy.selectors";

@Component({
  selector: 'app-forms-container',
  templateUrl: './forms-container.component.html',
  styleUrls: ['./forms-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsContainerComponent implements OnInit {

  $dummies: Observable<DummyModel[]>;
  $loading: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new dummyActions.LoadDummyAction());

    this.$dummies = this.store.select(dummySelectors.getDummies);
    this.$loading = this.store.select(dummySelectors.getDummiesLoading);
  }

  ngOnInit() {
  }

}
