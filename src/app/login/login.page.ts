import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController,LoadingController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pageTitle = 'Login';
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar(){
    this.presentLoadingWithOptions();
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.loadingController.dismiss();
      this.navCtrl.navigateRoot('menu/inicio');
      const alert = await this.alertController.create({
        header: 'Estas Logeado',
        message: 'Felicidades ya estas dentro de nuestro sistema',
        buttons: ['Aceptar']
      });
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //spinner: null,
      duration: 2000,
      message: 'Iniciando Sesion',
      translucent: true,
      //cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
