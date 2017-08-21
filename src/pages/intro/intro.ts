import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { YtProvider, VideoItem } from '../../providers/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
selector: 'page-intro',
templateUrl: 'intro.html'
})
export class IntroPage {
  @ViewChild('mySlider') slider: Slides;
    video: VideoItem = new VideoItem('','','','');
    constructor(public navCtrl: NavController, public yt: YoutubeVideoPlayer, public storage: Storage, public ytProvider: YtProvider) {
    this.ytProvider.getVideoInfo().subscribe(data => {
      this.video = data;
    })
  }
  public closeIntro() {
    this.storage.set('hasSeenIntro', true).then((value: boolean) => {
      this.navCtrl.setRoot(TabsPage);
    });
  }
  public playVideo(id: string) {
    this.yt.openVideo(id);
  }
  public nextPage() {
    this.slider.slideTo(1, 500);
  }
}
