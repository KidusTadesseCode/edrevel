import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from '../graphs/graphs.component';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  standalone: true,
  imports: [CommonModule, GraphsComponent],
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent {
  public barChartData = {
    labels: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],
    datasets: [
      {
        label: 'Completed',
        data: [26, 90, 57, 60, 0],
        backgroundColor: '#8AA54A',
      },
      {
        label: '',
        data: [74, 40, 27, 80, 40, 0],
        backgroundColor: '#8AA54A',
      },
      {
        label: '',
        data: [51, 70, 20, 0, 0],
        backgroundColor: '#8AA54A',
      },
      {
        label: 'Pending',
        data: [100, 100, 0],
        backgroundColor: '#D3D3D3',
      },
    ],
  };

  public chartType: ChartType = 'bar';
  public graphTitle = 'Assessment Progress';
}
