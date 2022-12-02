import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  pageTitle = 'Registro';
  
  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }
  Usuarios: any = [
    {
      nombre: 'hola',
      password: '123',
    },
    {
      nombre: 'admin',
      password: '456',
      
    },
    {
      nombre: 'chao',
      password: '789',
    },

  ];
  ngOnInit() {
  }

  async guardar(){      

    var f = this.formularioRegistro.value;
    const alert = await this.alertController.create({
      header: 'Gracias por Registrarse',
      message: 'Ahora obtener los mejores beneficios con nuestra App',
      buttons: ['Aceptar']
    });
    await alert.present();

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;

    }

    var Usuarios = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(Usuarios));
  }

}

