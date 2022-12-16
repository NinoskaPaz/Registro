import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Home',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Alumnos',
      url: '/menu/personajes',
      icono: 'person'
    },
    {
      titulo: 'QR',
      url: '/menu/QR',
      icono: 'scan'
    },
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    public authService: AuthService,
    public router: Router ) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Estas seguro que desea salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
           this.logout();
          }
        }
      ]
    });

    await alert.present();
  }
  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})

  }

}
