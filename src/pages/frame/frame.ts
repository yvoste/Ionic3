import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-frame',
  templateUrl: 'frame.html',
})
export class FramePage {
  private videoUrl;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.videoUrl = this.navParams.get('rul');
  }
  goBackToPreviousPage(){
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Frame');
  }

}
