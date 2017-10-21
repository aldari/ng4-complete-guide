import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAae9Xjhp8CBNGDXolOBmw0RbkPGqWQKJ0',
      authDomain: 'ng-http-65ff1.firebaseapp.com',
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
