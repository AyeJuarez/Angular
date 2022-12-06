import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstNameControl = new FormControl ("", [Validators.required, Validators.minLength(7), this.notHomeroValidator])
  lastNameControl = new FormControl ("", Validators.required)

  emailControl = new FormControl('', [Validators.email, Validators.required])
  
  passwordControl = new FormControl ('', [Validators.minLength(6), Validators.required])

  repeatPasswordControl = new FormControl ('', [Validators.minLength(6), Validators.required])

  streetNameControl = new FormControl ('', [Validators.required])
  streetNumberControl = new FormControl ('', [Validators.required])
  signedTermControl = new FormControl (false, [Validators.requiredTrue])
  countryControl = new FormControl ('', [Validators.required])

  registerForm = new FormGroup ({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    repeatPassword: this.repeatPasswordControl,
    location: new FormGroup ({
      streetName: this.streetNameControl,
      streetNumber: this.streetNumberControl,
      country: this.countryControl,
    }),
    signedTerm: this.signedTermControl,
  }, {
    validators: [
      this.passwordMatchValidator
    ]
  })

  notHomeroValidator(control: FormControl){
    if (control.value === 'homero'){
      return{
        isHomero: true
      }
    }
    return null
  }

  passwordMatchValidator () {
    return () => {
      if (this.passwordControl.value !== this.repeatPasswordControl.value){
        return {
          passwordMatch: true
        }
      }
      return null 
    } 
  }

  onSubmit () {
    console.log(this.registerForm.value);
    
  }

}
