import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tax',
  templateUrl: './add-tax.component.html',
  styleUrls: ['./add-tax.component.scss']
})
export class AddTaxComponent {
  taxForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.taxForm = this.fb.group({
      active: [true],
      division_id: [10, Validators.required],
      division_name: ['', Validators.required],
      tax_id: ['', Validators.required],
      tax_description: ['', Validators.required],
    });
    
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.taxForm.valid) {
      console.log(this.taxForm.value);
    }
  }
}
