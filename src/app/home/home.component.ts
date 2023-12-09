import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = 'Home Component';
  subTitle: string = 'home sub title';
  another: any;
  isFormDisabled = false;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    comments: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  constructor(private fb: FormBuilder) {
   
  }

  toggleFormState() {
    this.markFormGroupTouched(this.form);
    if(this.form.valid){
      this.isFormDisabled = !this.isFormDisabled;
    }
    
  }

   // Helper method to mark all form controls as touched
   private markFormGroupTouched(formGroup: FormGroup) {
    console.log("Helo")
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
