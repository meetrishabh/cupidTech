import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    companyName: null,
    email: null,
    password: null,
    directorName: null,
    dateOfIncorporation: null,
    phoneNumber: null,
    alternatePhoneNumber: null,
    companyAddress: null,
    district: null,
    state: null,
    pinCode: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router // Inject Router
  ) { }

  onSubmit(): void {
    const {
      companyName, email, password, directorName, dateOfIncorporation, phoneNumber,
      alternatePhoneNumber, companyAddress, district, state, pinCode
    } = this.form;

    // Send data to the register method in AuthService
    this.authService.register(
      companyName, dateOfIncorporation, directorName, phoneNumber, email, password,
      alternatePhoneNumber, companyAddress, district, state, pinCode
    ).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        // Redirect to login page after successful sign-up
        this.router.navigate(['/login']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
