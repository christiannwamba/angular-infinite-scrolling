import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { FruitsService } from '../fruits.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadFruits$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(({ payload: { page, limit } }) => {
      return this.fruitsService.getAll(page, limit).pipe(
        map((fruits) => {
          return { type: ActionTypes.LoadSuccess, payload: fruits };
        }),
        catchError(() => EMPTY)
      );
    })
  );

  constructor(
    private actions$: Actions,
    private fruitsService: FruitsService
  ) {}
}
