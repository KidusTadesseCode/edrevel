import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';
interface GraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    tension?: number;
    fill?: boolean;
  }[];
}

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
})
export class GraphsComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;
  @Input() graphTitle: string = '';
  @Input() graphType: ChartType = 'bar';
  @Input() graphData: GraphData = {
    labels: [] as string[],
    datasets: [] as {
      label: string;
      data: number[];
    }[],
  };

  public chartOptions: any = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value: number) {
            return value + '%';
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: '',
        font: {
          size: 20,
        },
        align: 'start',
        color: '#333B4B',
      },
      legend: {
        display: true,
        labels: {
          filter: (legendItem: any) => legendItem.text !== '',
        },
        color: '#333B4B',
      },
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['graphTitle']) {
      this.chartOptions.plugins.title.text = this.graphTitle;
      if (this.chart) {
        this.chart.update();
      }
    }

    if (changes['graphData']) {
      if (this.chart) {
        this.chart.update();
      }
    }
  }

  updateChart(data: any) {
    this.chart.chart?.update(data);
  }
}
