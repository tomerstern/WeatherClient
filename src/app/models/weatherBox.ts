export class DetailsForBlock {
	weatherDetails: WeatherDetails;
	title: string;
	// constructor() {
	// 	this.weatherDetails = {};
	//   }
}

export class WeatherDetails {
	weather: weather[];
	main: main;
	wind: wind;
}

export class weather {
	main: string;
	description: string;
}

export class main {
	temp: number;
	feels_like: number;
	humidity: number;
}

export class wind {
	speed: number;
	deg: number;
	gust: number;
}

export class weatherCondition {
	clouds: string = 'Clouds';
	clear: string = 'Clear';
	snow: string = 'Snow';
	rain: string = 'Rain';
	drizzle: string = 'Drizzle';
	thunderstorm: string = 'Thunderstorm';
}