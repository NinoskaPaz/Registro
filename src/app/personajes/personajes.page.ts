import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController,AlertController, ModalController, ToastController  } from '@ionic/angular';
import { Persona } from 'src/app/services/persona';
import { PersonaService } from '../services/persona.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage {

  pageTitle = 'Alumnos';
  busqueda: string = '';

  listadoPersona: Persona[] = [];
  
  constructor(private personaService: PersonaService, private alertCtrl: AlertController, private modalCtrl:ModalController,private toastCtrl:ToastController) 
  {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas().subscribe(respuesta => {
      console.log(respuesta);
      this.listadoPersona = respuesta;
    })
  }

  async openDetailPersona(persona:Persona) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: persona.id },
      breakpoints: [0,0.5,0.8],
      initialBreakpoint:0.5
    });
    modal.present();
  }

  async addPersona() {
    const alert = await this.alertCtrl.create({
      header:'Agregar Alumno',
      inputs: [
        {
          name:'nombre',
          type:'text',
          placeholder:'nombre'
        },
        {
          name:'apellido',
          type:'text',
          placeholder:'apellido',
        },
        {
          name:'género',
          type:'text',
          placeholder:'Género'
        },
        {
          name:'edad',
          type:'number',
          placeholder:'edad',
        },
        {
          name:'email',
          type:'email',
          placeholder:'correo@correo.com'
        },
        {
          name:'imagen',
          type:'url',
          placeholder:'link web image'
        }
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancelar',
        },
        {
          text:'Guardar',
          role:'confirm',
          handler: (data) => {
            this.personaService.addPersona(data);
            this.toastPresent('Persona Registrada');
          }
        }
      ]
      });
      await alert.present();
    }

    async toastPresent(message:string){
      const toast = await this.toastCtrl.create({
        message:message,
        duration:1000,
      })
      toast.present();
    }
    

//listaProgramadores: any = [
 // {
//  id: 1,
    //name: 'Constanza Aranguiz',
//      homeworld: 'Programador ',
//      Informacion: 'hola',
//      image: '../../../assets/img/connie.png',
//    },
//    {
//      id: 2,
//      name: 'Luis Felipe',
//      homeworld: 'Programador ',
//      Informacion: 'hola',
//      image: '../../../assets/img/luis.png',
//    },
//    {
//      id: 3,
//      name: 'Ninoska Muñoz',
//      homeworld: 'Programador ',
//      Informacion: 'hola',
//      image: '../../../assets/img/ninoska.png',
//    },
//  ];
//  this.alertCtrl.navigateForward(['detalle-personaje'],navigationExtras);
//  goToDetails(personaje: any): void {
//    const navigationExtras: NavigationExtras = {
//      queryParams: {
//        personaje : JSON.stringify(personaje)
//      }
//    };
//  buscar(event):void{
//    this.busqueda = event.detail.value;
//  }
}
