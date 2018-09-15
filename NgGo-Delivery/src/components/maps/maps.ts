import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { NavController, Platform } from 'ionic-angular';
declare var google;

/**
 * Generated class for the MapsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class MapsComponent {
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  constructor(public navCtrl: NavController) {
        
  }  
  ngOnInit(){
    
    this.initMap();
  }

  initMap() {
    
    let mylocation = new google.maps.LatLng();
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: mylocation
    });
    console.log("on init maps");
  }
}
