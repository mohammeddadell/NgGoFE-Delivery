import { NgModule } from '@angular/core';
import { MapsComponent } from './maps/maps';
import { GoogleMaps } from '@ionic-native/google-maps';
@NgModule({
	declarations: [MapsComponent],
	imports: [],
	exports: [MapsComponent],
	providers: [
        GoogleMaps
    ]
})
export class ComponentsModule {}
