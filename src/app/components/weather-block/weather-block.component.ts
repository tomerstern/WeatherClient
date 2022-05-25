import { Component, Input, OnInit } from '@angular/core';
import { WeatherDetails } from 'src/app/models/weatherBox';

@Component({
  selector: 'app-weather-block',
  templateUrl: './weather-block.component.html',
  styleUrls: ['./weather-block.component.scss']
})
export class WeatherBlockComponent implements OnInit {

	@Input() weatherDetails: WeatherDetails;
	@Input() title: string;
	isShowMore: boolean;
	weatherCondition: string;
	btnVal: string ='Click For More';

  constructor() { }

  ngOnInit() {
	if (!this.weatherDetails)
	{
		return;
	}
	
	this.weatherCondition = this.weatherDetails?.weather[0].main;
  }

  btnClick(){
	this.isShowMore = !this.isShowMore;
	this.btnVal = `Click For ${this.isShowMore ? 'Less' : 'More'}`;
  }

}
