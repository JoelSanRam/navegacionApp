import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  tripulacion:any[]= [
    {
      nombre: "Sanji",
      apodo: "Kuroashi"
    },
    {
      nombre: "Luffy",
      apodo: "Mugiwara"
    },
    {
      nombre: "Zoro",
      apodo: "Roronoa"
    }
  ];

  irPagina3(tripulante:any){
    // console.log(tripulante);
    this.navCtrl.navigateForward('/pagina3/' + tripulante.nombre + tripulante.apodo);
  }

}
