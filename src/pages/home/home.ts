import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from '@types/googlemaps';
import { map } from './home-Global';
import { MakesMap } from './home-makes-map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController) {
  } 

  drawMap(e) {
   var createsMap = new MakesMap();
   createsMap.getPosition();
  }   
}

