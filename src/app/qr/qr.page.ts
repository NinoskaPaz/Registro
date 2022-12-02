import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  ngOnInit() {
  }
  
constructor(private barcodeScanner: BarcodeScanner) { 


    this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });


}


}
