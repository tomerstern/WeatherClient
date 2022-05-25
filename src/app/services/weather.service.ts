import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

	constructor(
        public communicationService: CommunicationService, ) {}

    latitude: number = 0;
    longitude: number = 0;

	async getWeatherByCoordinates(){
		
		await this.getLocation();
		return await this.weatherByCoordinates();
	}

	// gets user location
	getLocation() {
		return new Promise((resolve, reject) => {
		  if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position: any) => {
			  if (position) {
				console.log("Latitude: " + position.coords.latitude +
				  "Longitude: " + position.coords.longitude);
				this.latitude = position.coords.latitude;
				this.longitude = position.coords.longitude;
				resolve({
				  lat:position.coords.latitude,
				  lng:position.coords.longitude
				})
			  }
			},
			  (error: any) => reject(error));
		  } else {
			alert("Geolocation is not supported by this browser.");
		  }
		});
	  }


	// Weather By City
	async getWeatherByCity(city: string){
		let jsonResult = await this.communicationService.getWeatherByCity(city);
		return jsonResult;
	}

	// Weather By Coordinates
	async weatherByCoordinates(){			
		let coord = [this.latitude, this.longitude];
		let jsonResult = await this.communicationService.getWeatherByCoordinates(coord);
		return jsonResult;
	}
}
