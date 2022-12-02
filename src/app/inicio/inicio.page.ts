import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


const latitude = Component
const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  weatherTemp:any
  weatherIcon:any
  weatherDetails:any
  mindicadorValor:any
  mindicadorMedida:any
  mindicadorValorDolar:any
  mindicadorMedidaDolar:any
  cityName:any
  todayDate = new Date()

  fecha: string;

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  };

  constructor(public toastController: ToastController, public httpClient:HttpClient, private geolocation: Geolocation) {
    this.getGeolocation();
    moment.locale('es-cl');
    this.fecha = moment().format();
    this.cargarEntradas();
    this.loadData();
    this.loadData1()
    this.loadData2()
  }
  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      resp.coords.latitude
      resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  loadData(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.httpClient.get(`${API_URL}weather?lat=${resp.coords.latitude}&lon=${resp.coords.longitude}&appid=${API_KEY}`).subscribe(results =>{
        console.log();
        this.weatherTemp= results ['main']
        this.cityName = results['name']
        console.log(this.weatherTemp);
        this.weatherDetails = results['weather'][0]
        console.log(this.weatherDetails)
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
        })
      resp.coords.latitude
      resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }


  ngOnInit() {
  }

  cargarEntradas(){
    var fecha = moment(this.fecha).format('DD-MM-YY');

    this.entradas = JSON.parse(localStorage.getItem('entradas'));
    if(this.entradas){
      var entradaActual = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(entradaActual){
        this.entradaActual = entradaActual;
      }else{
        this.inicializarNuevaEntrada();
      }
    }else{
      this.inicializarNuevaEntrada();
    }
  }

  inicializarNuevaEntrada(){
    var fecha = moment(this.fecha).format('DD-MM-YY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MM');
    var year = moment(this.fecha).format('YYYY');

    this.entradaActual = {
      fechaTexto: dia + ' de ' + mes + ' del ' +  year,
      fecha: fecha,
      texto: ''
    }
  }

  async guardar(entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }){

    var fecha = moment(this.fecha).format('DD-MM-YYYY');


    if(this.entradas){
      var item = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(item){
        localStorage.setItem('entradas',JSON.stringify(this.entradas));
      }else{
        this.guardarItem(entradaActual);
      }

    }else{
      this.entradas = [];
      this.guardarItem(entradaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  guardarItem(entrada:{fecha: string,fechaTexto: string,texto: string }){
    this.entradas.push(entrada);
    localStorage.setItem('entradas',JSON.stringify(this.entradas));
  }

  loadData1(){
    var fecha = moment(this.fecha).format('DD-MM-YY');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.httpClient.get(`https://mindicador.cl/api/uf/30-11-2022`).subscribe(results =>{
        console.log(results);
        this.mindicadorValor= results ['serie'][0]
        this.mindicadorMedida = results['unidad_medida']
        })
    }).catch((error) => {
      console.log('Error api mindicador', error);
    });
}

loadData2(){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.httpClient.get(`https://mindicador.cl/api/dolar/30-11-2022`).subscribe(resultss =>{
      console.log(resultss);
      this.mindicadorValorDolar= resultss ['serie'][0]
      })
  }).catch((error) => {
    console.log('Error api mindicador', error);
  });
}
}
