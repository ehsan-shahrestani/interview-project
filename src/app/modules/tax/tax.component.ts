import { Component, OnInit } from '@angular/core';
import { ITax } from './types/tax.type';
import { TaxService } from './services/tax.service';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectTaxList } from './store/tax.selectors';
import { deleteTax, getTax } from './store/tax.actions';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {

  taxList: ITax[] = [];
  fetchTaxLoading = false;
  taxList$: Observable<ITax[]> = of([]);

  constructor(private taxService: TaxService, private readonly store: Store, private confirmService : ConfirmationService) {
  }

  ngOnInit(): void {
    this.store.dispatch(getTax())
    this.taxList$ = this.store.select(selectTaxList)

  }


  fetchTaxList() {
    this.fetchTaxLoading = true;
    this.taxService.getAllTaxs().subscribe({
      next: (out) => {
        this.fetchTaxLoading = false;
        this.taxList = out.results;
      },
      error: () => {
        this.fetchTaxLoading = false;
      }
    })
  }
  deleteTax(Tax: ITax) {
    this.confirmService.confirm({
      header:'Delete Tax',
      message:"Are you sure for delete Tax?",
      accept:() =>{
        
      }
    })
    //  Todo delete tax
    this.store.dispatch(deleteTax({Tax}))
  }
}
