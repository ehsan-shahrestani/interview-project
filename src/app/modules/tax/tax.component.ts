import { Component, OnInit } from '@angular/core';
import { ITax } from './types/tax.type';
import { TaxService } from './services/tax.service';
import { Store, select } from '@ngrx/store';
import { Observable, filter, of } from 'rxjs';
import { selectTaxIsLoading, selectTaxList } from './store/tax.selectors';
import { deleteTax, getTax } from './store/tax.actions';
import { ConfirmationService } from 'primeng/api';
import { ITaxeState } from './store/tax.reducer';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {

  // taxList: ITax[] = [];
  fetchTaxLoading = false;
  taxList$: Observable<ITax[]> = of([]);
  isLoading$!: Observable<boolean>; 

  constructor(private taxService: TaxService, private readonly store: Store<{ taxState: ITaxeState }>, private confirmService : ConfirmationService) {
  }

  ngOnInit(): void {
    this.initDispatch()
    this,this.initSubscription()
  }

  initSubscription(){
    this.taxList$ = this.store.select(selectTaxList)
    this.isLoading$ = this.store.pipe(select(selectTaxIsLoading));
  }

  initDispatch(){
    this.store.dispatch(getTax())
  }


  // fetchTaxList() {
  //   this.fetchTaxLoading = true;
  //   this.taxService.getAllTaxs().subscribe({
  //     next: (out) => {
  //       this.fetchTaxLoading = false;
  //       this.taxList = out.results;
  //     },
  //     error: () => {
  //       this.fetchTaxLoading = false;
  //     }
  //   })
  // }
  deleteTax(Tax: ITax) {
    this.confirmService.confirm({
      header:'Delete Tax',
      message:"Are you sure for delete Tax?",
      accept:() =>{
        this.store.dispatch(deleteTax({Tax:Tax}))
      }
    })
    //  Todo delete tax
    this.store.dispatch(deleteTax({Tax}))
  }
}
