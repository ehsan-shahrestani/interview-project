import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, tap } from 'rxjs/operators';

import { TaxService } from '../services/tax.service';
import { createTax, createTaxuccess, deleteTax, deleteTaxuccess, getTax, getTaxSuccess, updateTax, updateTaxuccess } from './tax.actions';
import { ITax } from '../types/tax.type';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable()
export class TaxEffects {
    constructor(private readonly actions$: Actions, private readonly taxService: TaxService, private router: Router, private messageSerive: MessageService) {
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
            switchMap(({ Tax }) => {
                return this.taxService.createTax(Tax);
            }),

            map((Tax: ITax) => {
                this.messageSerive.add({
                    detail: 'Create Success',
                    severity: 'success',
                    summary: 'Create Tax Successful'

                })
                this.router.navigateByUrl('/tax').then();
                return createTaxuccess({ Tax })
            }

            )
        )
    );
    updateTax$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateTax),
            switchMap(({ Tax, id }) => this.taxService.updateTax(id, Tax)),
            map((Tax: ITax) => {
                this.messageSerive.add({
                    detail: 'Update Success',
                    severity: 'success',
                    summary: 'Update Selected Tax Successful'

                })
                this.router.navigateByUrl('/tax').then();
                return updateTaxuccess({ Tax })
            }

            )
        )
    );

    deleteTax$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteTax),
            switchMap(({ Tax }) => {
                return this.taxService.deleteTax(Tax).pipe(
                    map(() => Tax),
                );
            }),
            map((Tax: ITax) => {

                this.messageSerive.add({
                    detail: 'Delete Success',
                    severity: 'success',
                    summary: 'Delete Selected Tax Successful'

                })
                return deleteTaxuccess({ Tax })
            })
        )
    );
}