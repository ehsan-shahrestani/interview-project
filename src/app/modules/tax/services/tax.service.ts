import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITax } from '../types/tax.type';
import { deleteTax } from '../store/tax.actions';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  baseUrl = 'http://corpscript.ddns.net:3000/api/v1/erp/inv/Tax/'

  constructor(private http: HttpClient) { }

  getTaxById(id: number): Observable<ITax> {
    return this.http.get<ITax>(this.baseUrl + id)
  }

  getAllTaxs(): Observable<{ results: ITax[] }> {
    return this.http.get<{ results: ITax[] }>(this.baseUrl)
  }

  createTax(tax: ITax): Observable<ITax> {
    return this.http.post<ITax>(this.baseUrl, tax)
  }
  updateTax(id:number, input: ITax): Observable<ITax> {
    return this.http.patch<ITax>(this.baseUrl + id, input)

  }

  deleteTax(tax: ITax) {
    return this.http.delete(this.baseUrl + tax.id)

  }



}
