import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
})
export class AddEmployeeFormComponent implements OnInit {
  addEmployeeForm: FormGroup;

  departments = ['HR', 'IT', 'Sales', 'Marketing', 'Finance'];

  constructor(private fb: FormBuilder) {
    this.addEmployeeForm = this.fb.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addEmployeeForm.valid) {
      console.log(this.addEmployeeForm.value);
      alert('Employee added successfully!');
      this.addEmployeeForm.reset();
    }
  }
}
