import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators, FormValidatorService } from 'ngx-forms-validator';

export interface data {
  name: string,
  email: string,
  telephone: number | null,
  message: string
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

export class DemoComponent {
  public form!: FormGroup;
	public data: data = {
    'name': '',
    'email': '',
    'telephone': null,
    'message': ''
  };

  constructor(
    public formBuilder: FormBuilder,
    public nxgFormsValidatorService : FormValidatorService
  ) { 
    this.initForm();
  }

	private initForm() {
		this.form = this.formBuilder.group({
			name: [this.data.name, [Validators.required, CustomValidators.hasWhiteSpaceLine]],
			email: [this.data.email, [Validators.required, CustomValidators.hasWhiteSpaceLine]],
			telephone: [this.data.telephone, [Validators.required, CustomValidators.hasWhiteSpaceLine]],
			message: [this.data.message, [Validators.required, CustomValidators.hasWhiteSpaceLine]],
		});
    
    this.nxgFormsValidatorService.manageValidateErrors(this.form);
  }

}
