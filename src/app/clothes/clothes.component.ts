import { Component } from '@angular/core';
//importando libreria SweetAlert...
import swal from'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})

export class ClothesComponent {

}

Swal.fire({
  title: "Welcome",
  background: "#abdbe3",
  icon: "question",
  color: "#000",
  showConfirmButton:false,
});
