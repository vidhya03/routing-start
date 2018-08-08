import { Observable } from 'rxjs/Observable';
import {
  CanDeactivate,
  ActivatedRoute,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  //   canDeactivate (
  //   component: CanComponentDeactivate,
  //   currentRout: ActivatedRoute,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   return component.canDeactivate();
  // }
  canDeactivate(
    component: CanComponentDeactivate
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
