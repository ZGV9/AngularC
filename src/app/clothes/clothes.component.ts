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
  title: "WELCOME TO THE ONLINE SHOP IMS24",
  background: "#990033",
  icon: "question",
  color: "#000",
  showConfirmButton:false,
  iconColor: '#000',
  timer: 2680,
  timerProgressBar:true,
});

