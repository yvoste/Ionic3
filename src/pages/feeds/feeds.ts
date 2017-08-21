import { RssService, FeedItem } from './../../providers/rss-service';
import { Component } from '@angular/core';
//import { NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
selector: 'page-feeds',
templateUrl: 'feeds.html'
})

export class FeedsPage {
  selectedCategory = '';
  articles: FeedItem[];
  loading: Boolean;

  constructor(private iab: InAppBrowser, private rssService: RssService) {
    let passedCat = ''; //navParams.get('category');
    if (passedCat !== undefined) {
      this.selectedCategory = passedCat;
    }
    this.loadArticles();
  }

  loadArticles() {
    this.articles = [];
    this.loading = true;
    this.rssService.getArticlesForCategory(this.selectedCategory).subscribe(res => {
      this.articles = res;
      this.loading = false;
    });
  }

  public openArticle(url: string) {
    this.iab.create(url, 'blank');
  }
}
