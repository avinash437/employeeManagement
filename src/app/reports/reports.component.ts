import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.renderVacationChart();
    this.renderPerformanceChart();
  }
  renderPerformanceChart() { 

    var chart = new CanvasJS.Chart("performanceContainer", {
      animationEnabled: true,
      data: [{
        type: "area",
        axisY: {
          title: "Pefrormance ",
          includeZero: false
        },
        dataPoints: [
          { y: 70, label: 'Fernando West' },
          { y: 80, label: 'Helen Wade' },
          { y: 100, label: 'Patsy Lane'},
          { y: 95, label: 'Tyler Campbell'  },
          { y: 78 , label: 'Mabel Kim' }
        ]
      }]
    });
    chart.render();
    
  }
  renderVacationChart() { 

    var chart = new CanvasJS.Chart("vacationContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: ''
      },
      axisY: {
        title: "Vacation ",
        includeZero: false
      },
      data: [{
        type: "line",
        dataPoints: [
			{ y: 5, label: 'January' },
			{ y: 1, label: 'Februray' },
			{ y: 2, label: 'March' , indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{ y: 6, label: 'April'  },
			{ y: 5 , label: 'May' },
			{ y: 0, label: 'June'  },
			{ y: 8, label: 'July'  },
			{ y: 8, label: 'August'  },
			{ y: 1, label: 'September'  , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 0, label: 'October'  },
			{ y: 8, label: 'November'  },
			{ y: 1, label: 'December'  }
		]
      }]
    });
    chart.render();
  }
}
