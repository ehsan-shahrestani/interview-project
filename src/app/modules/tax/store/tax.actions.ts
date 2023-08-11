import { createAction, props } from '@ngrx/store';
import { ITax } from '../types/tax.type';

const prefix = '[Tax]';

export const getTax = createAction(`${prefix} Get Tax`);

export const getTaxSuccess = createAction( `${getTax.type} Success`,
    props<{ taxs: ITax[];}>()
);

export const createTax = createAction(
    `${prefix} Create Tax`,
    props<{Tax: ITax}>()
);

export const createTaxuccess = createAction(
    `${createTax.type} Success`,
    props<{
        Tax: ITax;
    }>()
);

export const updateTax = createAction(
    `${prefix} Update Tax`,
    props<{
        Tax: ITax;
    }>()
);

export const updateTaxuccess = createAction(
    `${updateTax.type} Success`,
    props<{
        Tax: ITax;
    }>()
);

export const deleteTax = createAction(
    `${prefix} Delete Tax`,
    props<{
        Tax: ITax;
    }>()
);
export const deleteTaxuccess = createAction(
    `${deleteTax.type} Success`,
    props<{
        Tax: ITax;
    }>()
);