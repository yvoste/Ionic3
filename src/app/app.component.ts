import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { Storage } from '@ionic/storage';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage :  any;

  constructor(platform: Platform, private statusBar: StatusBar, public storage: Storage) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
    });

    this.storage.get('hasSeenIntro').then((value: boolean) => {
      if (value) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = IntroPage;
      }
    });
  }
}
