import { Injectable } from '@angular/core';

@Injectable()
export class GoogleAnalyticsService {

  gapi: any;

  constructor() {
    (function(w, d, s, g, js, fs) {
      g = this.gapi || (this.gapi = {}); g.analytics = { q: [], ready: function(f) { this.q.push(f); } };
      js = d.createElement(s); fs = d.getElementsByTagName(s)[0];
      js.src = 'https://apis.google.com/js/platform.js';
      fs.parentNode.insertBefore(js, fs); js.onload = function() { g.load('analytics'); };
    }(window, document, 'script'));

    this.gapi.analytics.ready(() => {
      const CLIENT_ID = '952694402859-ciaj7o98qkqjj5mmdbiros5v99labv0g.apps.googleusercontent.com';
      this.gapi.analytics.auth.authorize({
        clientid: CLIENT_ID
      });
    });
  }


}
