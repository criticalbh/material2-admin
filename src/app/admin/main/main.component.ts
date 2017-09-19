import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ObservableMedia} from "@angular/flex-layout";
import {Subscription} from "rxjs/Subscription";
import {AppState} from "../../reducers/app.state";
import * as uiActions from "../../actions/ui.action";
import * as uiSelectors from "../../selectors/ui.selectors";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, OnDestroy {

  mediaSub: Subscription;

  $sideOpen: Observable<boolean>;

  constructor(public media: ObservableMedia, private cd: ChangeDetectorRef, private store: Store<AppState>) {
    this.$sideOpen = this.store.select(uiSelectors.getSidebarOpen);
  }

  get isLargeScreen(): boolean {
    return this.media.isActive('gt-lg') || this.media.isActive('lg');
  }

  ngOnInit() {
    this.mediaSub = this.media.subscribe(val => {
      this.cd.markForCheck();
    })
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

  onToggleSidenav() {
    this.store.dispatch(new uiActions.ToggleSidebarAction());
  }
}
