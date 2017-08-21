import { ErrorHandler, NgModule } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ReadPage } from '../pages/read/read';
import { LearnPage } from '../pages/learn/learn';
import { FeedsPage } from '../pages/feeds/feeds';
import { ContactPage } from '../pages/contact/contact';
import { IntroPage } from '../pages/intro/intro';
import { FramePage } from '../pages/frame/frame';
import { HomePage } from '../pages/home/home';

import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EmailComposer } from '@ionic-native/email-composer';
import { YtProvider } from '../providers/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RssService } from '../providers/rss-service';
import { Ninja } from '../providers/ninja';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ReadPage,
    LearnPage,
    ContactPage,
    HomePage,
    FeedsPage,
    IntroPage,
    FramePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ReadPage,
    LearnPage,
    ContactPage,
    HomePage,
    FeedsPage,
    IntroPage,
    FramePage
  ],
  providers: [
    StatusBar,
    RssService,
    InAppBrowser,
    YoutubeVideoPlayer,
    YtProvider,
    EmailComposer,
    Ninja,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
