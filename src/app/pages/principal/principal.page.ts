import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goTopage3() {
    this.navCtrl.navigateForward('/pagina3');
}  

}
