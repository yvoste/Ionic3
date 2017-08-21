import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ FeedsPage } from '../feeds/feeds';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})

export class ReadPage {
  @ViewChild('mynav') nav: NavController;
  rootPage: any = FeedsPage;
  categories: Array<{title: string, key: string}>;
  constructor() {
    this.categories = [
      { title: '', key: '' },
      { title: 'Learn', key: 'LearnPage' },
      { title: 'Web Development', key: 'web' },
      { title: 'Productivity', key: 'productivity' },
      { title: 'Dev Thoughts', key: 'dev-thoughts' }
    ];
  }
  public reloadFeed(cat: string) {
    console.log(cat)
    this.nav.setRoot(FeedsPage, {category: cat});
  }
}
