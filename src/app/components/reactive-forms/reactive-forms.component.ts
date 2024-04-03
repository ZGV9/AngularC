import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})

export class ReactiveFormsComponent {

  userForm = this.formBuilder.group({
    lastName: this.formBuilder.control(''),
    email: this.formBuilder.control('', [
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      Validators.required,
    ]),
    contrasena: ['', Validators.required],
  });



  get emailControl() {
    return this.userForm.get('email');
  }

  get contrasenaControl() {
    return this.userForm.get('contrasena');
  }

  get nameControl() {
    return this.userForm.get('name');
  }

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    Swal.fire({
      icon: 'success',
      title: 'Realizado',
      text: 'Usuario registrado',
    });
  }
}
