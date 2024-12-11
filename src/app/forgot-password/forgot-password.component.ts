import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string="" ;

  onSubmit() {
    if (this.email) {
      // Your logic to send a password reset request
      console.log('Password reset link sent to:', this.email);
      // Example: You might call an API to handle password reset
    }
  }
}
