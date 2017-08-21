import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider} from '../../providers/yt';

import { Ninja } from '../../providers/ninja';
import { FramePage } from '../frame/frame';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  public framePage = FramePage;
  public paramsForFramePage = {
    rul : ''
  }
  learnType = 'courses';
  course1Url = 'http://courses.devdactic.com/p/ionic-by-doing';
  course2Url = 'http://courses.devdactic.com/p/ionic-2-in-one-hour';
  videos = [];
  vidos = 'https://www.youtube.com/watch?v=O0ZQbgGUeY0';
  videoUrl: SafeResourceUrl;


  constructor(private domSanitizer: DomSanitizer, private navCtrl: NavController, public iab: InAppBrowser, private yt: YoutubeVideoPlayer, public ytProvider: YtProvider) {
      //this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yQhfTdvezms')
      //this.data = navParams.get('data');
      this. ytProvider.getChannelVideos().subscribe(data => {
        //console.log(data);
      /*  let i = 0;
        for(let sanitizeUrl of data){
          this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+sanitizeUrl.id)
          console.log(this.videoUrl)
          data[i].id = this.videoUrl;
          //this.saniUrl.push(this.videoUrl);
          i++;
        }*/
        console.log(data);
        this.videos = data;
      })
  }
  public goToFrame(id: any){
    console.log(id)
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+id);
    this.navCtrl.push(FramePage, {
        rul : this.videoUrl
    })
  }

  public playVideo(id: string) {
    console.log(id);
    this.yt.openVideo(id);

    // Call a method from class Ninja. Create a new instance (Pass by the constructor) and call the method
    const ninja = new Ninja('BLUE');
    console.log(ninja.toString());
    // Call a static method from the class Ninja
    console.log(Ninja.toconst())


  }

  public openUrl(url: string) {
      this.iab.create (url, 'blank');
  }
  public topenUrl(url: string) {
      this.iab.create (url, 'blank');
  }
}
