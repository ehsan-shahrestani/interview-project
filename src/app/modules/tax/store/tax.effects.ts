import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import { TaxService } from '../services/tax.service';
import { getTax, getTaxSuccess } from './tax.actions';
import { ITax } from '../types/tax.type';

@Injectable()
export class TaxEffects {
    constructor(private readonly actions$: Actions, private readonly bookService: TaxService) {
    }

    getBooks$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getTax),
            switchMap(() => this.bookService.getAllTaxs()),
            map((response: { results: ITax[] }) => getTaxSuccess({ taxs: response.results }))
        )
    );

    // createBook$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(fromBooks.createBook),
    //         switchMap(({book}) => this.bookService.create(book)),
    //         map((book: IBook) => fromBooks.createBookSuccess({book}))
    //     )
    // );

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