import { Component } from '@angular/core';
import { ComponentOneComponent } from '../component-one/component-one.component';
import { BarGraphComponent } from '../bar-graph/bar-graph.component';
import { LineGraphComponent } from '../line-graph/line-graph.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [ComponentOneComponent, BarGraphComponent, LineGraphComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
})
export class MasterComponent {}
