import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../services/window-ref/window-ref.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {

  gapi: any;
  private _window: Window;

  gettingStarted: boolean = false;

  displayAnalytics() {
    this.gettingStarted = true;

    // reference window {}
    let window = this.windowRef.nativeWindow;

    // init connection with ga
    window.gapi.analytics.ready(() => {

      // authorize the user
      var CLIENT_ID = '952694402859-ciaj7o98qkqjj5mmdbiros5v99labv0g.apps.googleusercontent.com';
      window.gapi.analytics.auth.authorize({
        container: 'auth-button',
        clientid: CLIENT_ID,
      });

      // create the view selectors
      var viewSelector = new window.gapi.analytics.ViewSelector({
        container: 'view-selector'
      });

      var dataChart1 = new window.gapi.analytics.googleCharts.DataChart({
        query: {
          metrics: 'ga:sessions',
          dimensions: 'ga:city',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
          'max-results': 6,
          sort: '-ga:sessions'
        },
        chart: {
          container: 'chart-1-container',
          type: 'PIE',
          options: {
            width: '100%',
            pieHole: 4 / 9,
            backgroundColor: '#F5F5F5'
          }
        }
      });

      // create the timeline chart.
      var timeline = new window.gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
          metrics: 'ga:sessions',
          dimensions: 'ga:date'
        },
        chart: {
          type: 'LINE',
          container: 'timeline',
          options: {
            title: 'Sessions over the past week.',
            fontSize: 12,
            backgroundColor: '#F5F5F5'
          }
        }
      });

      // hook up the components to work together
      viewSelector.execute();
      viewSelector.on('change', function(ids) {
        var newIds = {
          query: {
            ids: ids
          }
        }
        timeline.set(newIds).execute();
        dataChart1.set({ query: { ids: ids } }).execute();
      });
    });
  }

  constructor(private windowRef: WindowRefService) {

  }

  ngOnInit() {

  }

}
