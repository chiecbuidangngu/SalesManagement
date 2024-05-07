import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/Auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService) {}
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  submitSignup() {
    this.authService.submitSignup(
      this.signupForm.value.email ?? '',
      this.signupForm.value.password ?? '',
      this.signupForm.value.firstName ?? '',
      this.signupForm.value.lastName ?? ''
    );
  }
}
