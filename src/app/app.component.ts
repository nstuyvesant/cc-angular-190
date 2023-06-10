import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options = {
    title: 'Area (time series - natural curve)',
    axes: {
      bottom: {
        title: '2019 Annual Sales Figures',
        mapsTo: 'date',
        scaleType: 'time'
      },
      left: {
        mapsTo: 'value',
        scaleType: 'linear'
      }
    },
    curve: 'curveNatural',
    height: '400px'
  }

  data = [
    {
      group: 'Dataset 1',
      date: '2019-01-01T05:00:00.000Z',
      value: 0
    },
    {
      group: 'Dataset 1',
      date: '2019-01-06T05:00:00.000Z',
      value: -37312
    },
    {
      group: 'Dataset 1',
      date: '2019-01-08T05:00:00.000Z',
      value: -22392
    },
    {
      group: 'Dataset 1',
      date: '2019-01-15T05:00:00.000Z',
      value: -52576
    },
    {
      group: 'Dataset 1',
      date: '2019-01-19T05:00:00.000Z',
      value: 20135
    },
    {
      group: 'Dataset 2',
      date: '2019-01-01T05:00:00.000Z',
      value: 47263
    },
    {
      group: 'Dataset 2',
      date: '2019-01-05T05:00:00.000Z',
      value: 14178
    },
    {
      group: 'Dataset 2',
      date: '2019-01-08T05:00:00.000Z',
      value: 23094
    },
    {
      group: 'Dataset 2',
      date: '2019-01-13T05:00:00.000Z',
      value: 45281
    },
    {
      group: 'Dataset 2',
      date: '2019-01-19T05:00:00.000Z',
      value: -63954
    }
  ]
}
