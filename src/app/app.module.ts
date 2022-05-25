import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CommunicationService } from './services/communication.service';
import { WeatherBlockComponent } from './components/weather-block/weather-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,	
  ],
  providers: [CommunicationService, {provide: 'BASE_URL', useValue: environment.API_URL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
