import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaxService } from '../../services/tax.service';
import { ITax } from '../../types/tax.type';

@Component({
  selector: 'app-edit-tax',
  templateUrl: './edit-tax.component.html',
  styleUrls: ['./edit-tax.component.scss']
})
export class EditTaxComponent implements OnInit {
  taxForm: FormGroup;
  taxId!: number;
  tax!: ITax

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private taxService: TaxService) {

    route.params.subscribe({
      next: (out) => {
        if (out['id']) {
          this.taxId = +out['id'];
          this.getTaxById(this.taxId)
        }
      }
    })



    this.taxForm = this.fb.group({
      active: [true],
      division_id: [10, Validators.required],
      division_name: ['', Validators.required],
      tax_id: ['', Validators.required],
      tax_description: ['', Validators.required],
    });

  }

  ngOnInit(): void { }

  submitForm() {
    if (this.taxForm.valid) {
      console.log(this.taxForm.value);
    }
  }

  getTaxById(id: number) {
    this.taxService.getTaxById(id).subscribe({
      next: (out) => {
        this.tax = out;
        this.taxForm.patchValue(out)
      },
      error: () => {

      }
    })
  }
}
