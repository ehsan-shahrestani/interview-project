import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITaxeState } from './tax.reducer';


export const selectTaxState = createFeatureSelector<ITaxeState>('Tax');
export const selectTaxList = createSelector(selectTaxState, (state) => state.taxs);
export const selectTaxIsLoading = createSelector(selectTaxState, (state) => state.isLoading);