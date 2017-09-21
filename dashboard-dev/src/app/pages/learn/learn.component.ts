import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  allLessons = [];
  videoNumbers = {
    social: 0,
    email: 0,
    data: 0,
    web: 0,
    design: 0,
    photo: 0,
    video: 0,
    mind: 0
  };
  currentVideoTitle = 'What Makes A Truly Great Logo';
  currentCategory = '';

  constructor() {
    this.getAllVideos();
  }

  refineResults(category) {
    this.currentCategory = category;
    this.getAllVideos();
    const tempVideoArray: Array<{}> = [];
    for (let x = 0, max = this.allLessons.length; x < max; x++) {
      const lesson = this.allLessons[x];
      if (lesson.category === category) {
        tempVideoArray.push(lesson);
      }
    }
    this.allLessons = tempVideoArray;
    const lastLesson = this.allLessons[0];
  }

  getAllVideos() {
    // reset video numbers
    this.videoNumbers = {
      social: 0,
      email: 0,
      data: 0,
      web: 0,
      design: 0,
      photo: 0,
      video: 0,
      mind: 0
    };
    // get all lessons from firebase
    firebase.database().ref('/lessons').on('value', (snapshot) => {
      // cache lessons snapshot value
      const lessons = snapshot.val();
      if (lessons) {
        // turn [] into {} and add uid
        let objectToArray = Object.keys(lessons).map((key) => {
          this.videoNumbers[lessons[key].category]++;
          lessons[key].uid = key;
          return lessons[key];
        });
        if (!this.currentCategory) {
          // reverse results
          objectToArray = objectToArray.reverse();
          // return all lessons
          this.allLessons = objectToArray;
          this.allLessons = this.allLessons.slice(0, 10).map(i => {
            return i;
          });
        } else {
          this.allLessons = objectToArray;
        }
      } else {
        // no lessons available
        this.allLessons = [];
      }
    });
  }

  changePreview(photoURL) {
    photoURL = 'https://img.youtube.com/vi/' + this.youtubeURLParser(photoURL) + '/default.jpg';
    document.getElementById('video-preview').style.display = 'block';
    document.getElementById('video-preview').setAttribute('src', photoURL);
  }

  hidePreview() {
    document.getElementById('video-preview').style.display = 'none';
  }

  youtubeURLParser(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }

  changeVideo(title, video) {
    const videoURL = 'https://www.youtube.com/embed/' + this.youtubeURLParser(video) + '?rel=0&amp;showinfo=0&autoplay=true';
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.setAttribute('src', videoURL);
    this.currentVideoTitle = title;
  }

  ngOnInit() {
  }

}
