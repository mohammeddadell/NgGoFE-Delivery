import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { 
  GoogleMaps, GoogleMap, Environment
} from '@ionic-native/google-maps';
import {Geolocation } from '@ionic-native/geolocation'
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
  map: any;
  constructor(public geolocation: Geolocation, public navCtrl: NavController) {
        
  }  
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    /*// If you want to run your app
    // on browser, insert this line.
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBdf98cu82Z_17V5Ldw5T4HObiLgSzqmb4',
      'API_KEY_FOR_BROWSER_DEBUG':'AIzaSyBdf98cu82Z_17V5Ldw5T4HObiLgSzqmb4'
    });
    // Create a map
    // after the view is ready
    // and the native platform is ready.
    this.map = GoogleMaps.create('map_canvas');*/

    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }
  

/*
  initMap() {
    
    let mylocation = new google.maps.LatLng();
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: mylocation
    });
    console.log("on init maps");
    

}*/
}
