import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphsComponent } from '../graphs/graphs.component';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-line-graph',
  standalone: true,
  imports: [GraphsComponent],
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements OnInit {
  public chartType: ChartType = 'line';
  public graphTitle = "Student's Attendance";
  public lineChartData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get('componentThreeData.json').subscribe((data: any) => {
      data.datasets.forEach((dataset: any) => {
        dataset.borderColor = '#914DCC';
        dataset.backgroundColor = '#333B4B';
        dataset.tension = 0.5;
        dataset.pointRadius = 5;
        dataset.pointHoverRadius = 8;
        dataset.pointStyle = 'rectRounded';
        dataset.pointBackgroundColor = '#914DCC';
        dataset.pointBorderColor = '#914DCC';
        dataset.pointHoverBorderColor = '#914DCC';
        dataset.pointHoverBackgroundColor = '#914DCC';
        dataset.lineTension = 0;
      });

      this.lineChartData = data;
    });
  }
}
