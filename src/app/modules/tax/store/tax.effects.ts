import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, tap } from 'rxjs/operators';

import { TaxService } from '../services/tax.service';
import { createTax, createTaxuccess, getTax, getTaxSuccess } from './tax.actions';
import { ITax } from '../types/tax.type';

@Injectable()
export class TaxEffects {
    constructor(private readonly actions$: Actions, private readonly taxService: TaxService) {
    }

    getBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getTax),
            switchMap(() => this.taxService.getAllTaxs()),
            map((response: { results: ITax[] }) => getTaxSuccess({ taxs: response.results }))
        )
    );

    // createTax$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(createTax),
    //         switchMap(({ Tax }) => this.bookService.createTax(Tax)),
    //         map((Tax: ITax) => createTaxuccess({ Tax }))
    //     )
    // );

    createTax$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createTax),
            tap(action => {
                console.log('Received createTax action:', action);
            }),
            switchMap(( {Tax} ) => {
                return this.taxService.createTax(Tax);
            }),

            map((Tax: ITax) => createTaxuccess({ Tax }))
        )
    );
    // updateBook$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(fromBooks.updateBook),
    //         switchMap(({book}) => this.bookService.update(book)),
    //         map((book: IBook) => fromBooks.updateBookSuccess({book}))
    //     )
    // );

    // deleteBook$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(deleteBook),
    //         switchMap(({book}) => this.bookService.deleteTax(book)),
    //         map((Tax: ITax) => deleteTaxuccess({Tax}))
    //     )
    // );
}