import { Action, createReducer, on } from '@ngrx/store';
import { ITax } from '../types/tax.type';
import { createTax, createTaxuccess, deleteTax, deleteTaxuccess, getTax, getTaxSuccess, updateTax, updateTaxuccess } from './tax.actions';

export interface ITaxeState {
    taxs: ITax[];
    isLoading: boolean;

}

export const initialState: ITaxeState = {
    taxs: [],
    isLoading: false

};

const reducer = createReducer<ITaxeState>(
    initialState,
    on(getTax, (state) => {
        return {
            ...state,
            isLoading:true,
        };
    }),
    on(getTaxSuccess, (state, { taxs }) => {
        return {
            ...state,
            isLoading: false,
            taxs
        };
    }),
    on(createTax, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(createTaxuccess, (state, { Tax }) => {
        return {
            ...state,
            books: [...state.taxs, Tax],
            isLoading: false,
        };
    }),
    on(updateTax, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(updateTaxuccess, (state, { Tax }) => {
        return {
            ...state,
            books: state.taxs.map((b) => b.id === Tax.id ? Tax : b),
            isLoading: false,
        };
    }),
    on(deleteTax, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(deleteTaxuccess, (state, { Tax }) => {
        return {
            ...state,
            isLoading: false,
            taxs: state.taxs.filter((b) => b.id !== Tax.id)
        };
    })
);
export function TaxReducer(state: ITaxeState | undefined, action: Action): ITaxeState {
    return reducer(state, action);
}