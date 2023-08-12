import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, tap } from 'rxjs/operators';

import { TaxService } from '../services/tax.service';
import { createTax, createTaxuccess, deleteTax, deleteTaxuccess, getTax, getTaxSuccess, updateTax, updateTaxuccess } from './tax.actions';
import { ITax } from '../types/tax.type';

@Injectable()
export class TaxEffects {
    constructor(private readonly actions$: Actions, private readonly taxService: TaxService) {
    }

    getTaxs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getTax),
            switchMap(() => this.taxService.getAllTaxs()),
            map((response: { results: ITax[] }) => getTaxSuccess({ taxs: response.results }))
        )
    );

    createTax$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createTax),
            tap(action => {
                console.log('Received createTax action:', action);
            }),
            switchMap(({ Tax }) => {
                return this.taxService.createTax(Tax);
            }),

            map((Tax: ITax) => createTaxuccess({ Tax }))
        )
    );
    updateTax$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateTax),
            switchMap(({ Tax, id }) => this.taxService.updateTax(id, Tax)),
            map((Tax: ITax) => updateTaxuccess({ Tax }))
        )
    );

    // deleteTax$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(deleteTax),
    //         switchMap(({Tax}) => {
    //              return this.taxService.deleteTax(Tax)
    //           }),
    //         map((Tax: ITax) => deleteTaxuccess({ Tax }))
    //     )
    // );
}