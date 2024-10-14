import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarGraphComponent } from './bar-graph.component';
import { GraphsComponent } from '../graphs/graphs.component';
import { CommonModule } from '@angular/common';
import {
  Chart,
  CategoryScale,
  BarController,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  BarController,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

describe('BarGraphComponent', () => {
  let component: BarGraphComponent;
  let fixture: ComponentFixture<BarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarGraphComponent, GraphsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test if the chart title is set correctly
  it('should have the correct graph title', () => {
    expect(component.graphTitle).toBe('Assessment Progress');
  });

  // Test if the chart type is set correctly
  it('should set chartType to bar', () => {
    expect(component.chartType).toBe('bar');
  });

  // Test if the barChartData has correct labels
  it('should have correct labels in barChartData', () => {
    expect(component.barChartData.labels).toEqual([
      'Assignment',
      'Quiz',
      'Presentation',
      'Lab',
      'Viva',
    ]);
  });

  // Test if the barChartData datasets contain correct data
  it('should have correct data in barChartData datasets', () => {
    const datasets = component.barChartData.datasets;

    expect(datasets[0].data).toEqual([26, 90, 57, 60, 0]); // Completed dataset
    expect(datasets[3].label).toBe('Pending'); // Pending dataset
    expect(datasets[3].data).toEqual([100, 100, 0]); // Data for Pending
  });
});
