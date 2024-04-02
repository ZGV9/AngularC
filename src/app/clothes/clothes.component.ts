import { Component, OnInit } from '@angular/core';
//importando libreria SweetAlert...
import swal from'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Clothes } from '../models/clothes.model';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.scss'
})

export class ClothesComponent {
  clothesList: Clothes[] = [];

  constructor() {
    this.clothesList.push(new Clothes(1, "Remera-GloryBoys", "MarcaX", "M", 20, true, "assets/imgClothes/gloryboys-0602-1-92500820b5d79ba7fc17000782192917-640-0.webp"));
    this.clothesList.push(new Clothes(2, "Bermuda-GloryBoys", "MarcaY", "L", 30, false, "assets/imgClothes/gloryboys-0609-d8d73545c95b57353417000807757037-640-0.webp"));
    this.clothesList.push(new Clothes(3, "Buzo-CowBoys", "MarcaY", "L", 22, false, "assets/imgClothes/productos_mesa-de-trabajo-1-copia-131-ae3f4c47ea21c2a1b116910013909312-640-0.webp"));
    this.clothesList.push(new Clothes(2, "Remera-CowBoys", "MarcaY", "XL", 24, true, "assets/imgClothes/productos_mesa-de-trabajo-1-copia-31-cdf1155bfb754c29d016909991802075-640-0.webp"));
    this.clothesList.push(new Clothes(2, "Pantalon-CowBoys", "MarcaY", "XL", 24, true, "assets/imgClothes/productos_mesa-de-trabajo-1-copia-301-d57f744b0c28183d8a16909996784269-640-0.webp"));
    this.clothesList.push(new Clothes(2, "Remera-CowBoys", "MarcaY", "XL", 24, true, "assets/imgClothes/productos_mesa-de-trabajo-1-copia-281-3233f6c7c2a5532a8316910003221955-640-0.webp"));
  
  }
}


// Swal.fire({
//   title: "WELCOME TO THE ONLINE SHOP ~IMS24~",
//   background: "#fff",
//   color: "#000",
//   showConfirmButton:false,
//   iconColor: '#000',
//   timer: 2400,
//   timerProgressBar:true,
// });

Swal.fire({
  title: "WELCOME TO THE ONLINE SHOP ~IMS24~",
  width: 450,
  padding: "7em",
  color: "#fff",
  background: "#fff url(assets/imgClothes/bckgrd2.gif)",
  showConfirmButton:false,
  timer: 2500,
});