import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  @Input() data: any;

  chartData: any[] = [];
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'חבילה';
  showYAxisLabel = true;
  yAxisLabel = 'יחידות';

  ngOnInit() {
    // Prepare the chart data based on the input data
    this.chartData = [
      {
        name: 'כמות',
        value: this.data.amount,
      },
      {
        name: 'בשימוש',
        value: this.data.used,
      },
    ];
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(event: any) {
    console.log(event);
  }

  onDeactivate(event: any) {
    console.log(event);
  }
}
