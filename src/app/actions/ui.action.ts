import {Action} from "@ngrx/store";

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export class ToggleSidebarAction implements Action {
  readonly type = TOGGLE_SIDEBAR;

  constructor(public payload?) {
  }
}

export type Actions =
  ToggleSidebarAction;
