import { Component, OnInit } from '@angular/core';
import { Cities } from 'src/app/enums/enums';
import { DetailsForBlock, WeatherDetails } from 'src/app/models/weatherBox';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	constructor(public weatherService: WeatherService) { }
		  
	detailsForBlockLocalWeather: DetailsForBlock = new DetailsForBlock;
	detailsForBlockGlobalWeather: DetailsForBlock[] = [];
	localWeatherDetails: WeatherDetails;
	globalWeatherDetails: WeatherDetails[];
	globalTitle: string[];

	async ngOnInit() {		
		this.setLocalWeather();		
		this.setGlobalWeather();  
	}

	async setLocalWeather(){
		this.detailsForBlockLocalWeather.title = 'Local Weather';
		let coordinatesWeather = await this.weatherService.getWeatherByCoordinates();
		this.detailsForBlockLocalWeather.weatherDetails = JSON.parse(coordinatesWeather);
	}
	async setGlobalWeather(){	
		for (const city in Cities) {
			let cityWeather = await this.weatherService.getWeatherByCity(city);
			if(cityWeather != ''){
				let detailsForBlockGlobal: DetailsForBlock = new DetailsForBlock;
				detailsForBlockGlobal.weatherDetails = JSON.parse(cityWeather);
				detailsForBlockGlobal.title = city;
				this.detailsForBlockGlobalWeather.push(detailsForBlockGlobal);
			}	
		  }
	}
}
