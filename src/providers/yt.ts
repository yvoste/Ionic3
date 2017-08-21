import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export class VideoItem {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  constructor(id: string, thumbnail: string, title: string, date: string) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.title = title;
    this.date = date;
  }
}
@Injectable()
export class YtProvider {
  constructor(private http: Http) {}
  public getChannelVideos() {
    let apiKey = "AIzaSyAQcn4AInHFaJ2pdPhWjB8utKM8eAW62QQ";

    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + apiKey +
    '&channelId=UCZZPgUIorPao48a1tBYSDgg&part=snippet,id&order=date&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
    .map(objects => {
      var allVideos = [];
      for (let i = 0; i < objects.length; i++) {
        let item = objects[i];
        let newVideoItem = new VideoItem(item.id.videoId,
                                          item.snippet.thumbnails.high.url,
                                          item.snippet.title,
                                          item.snippet.publishedAt
                                        );
        allVideos.push(newVideoItem);
      }
      return allVideos
    });
  }
  public getVideoInfo() {
    let apiKey = "AIzaSyAQcn4AInHFaJ2pdPhWjB8utKM8eAW62QQ";

    return this.http.get('https://www.googleapis.com/youtube/v3/videos?key=' + apiKey +'&part=id%2C+snippet&id=ZbNN7RwKvew')

    .map((res) => {
      return res.json()['items'];
    })

    .map(objects =>{
      let item = objects[0];
      let newVideoItem = new VideoItem(item.id,
                                        item.snippet.thumbnails.high.url,
                                        item.snippet.title,
                                        item.snippet.publishedAt
                                      );
      return newVideoItem;
    });
  }
}
