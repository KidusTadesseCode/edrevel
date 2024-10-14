import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [CommonModule, CellComponent],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.scss',
})
export class ComponentOneComponent implements OnInit {
  public data: { [key: string]: string } = {};
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchData();
  }
  isArray(value: any): boolean {
    return Array.isArray(value) && !this.isDictionary(value);
  }
  isDictionary(value: any): boolean {
    return (
      typeof value[0] === 'object' &&
      !Array.isArray(value[0]) &&
      Array.isArray(value)
    );
  }
  Entries(value: any) {
    // console.log(value);
    for (let entry of Object.entries(value)) {
      console.log(entry[0], entry[1]);
    }
    return Object.entries(value);
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  parseCourseType(courseType: string, splitBy: string = '_'): string {
    if (!courseType) return '';
    return courseType
      .split(splitBy)
      .map((word) => this.capitalizeFirstLetter(word))
      .join(' ');
  }

  parseCourseContent(courseContent: any): any {
    if (typeof courseContent === 'string') {
      return courseContent.split(' ').length <= 1
        ? courseContent.toUpperCase()
        : this.parseCourseType(courseContent, ' ');
    } else if (Array.isArray(courseContent)) {
      return courseContent.map((item) => this.parseCourseContent(item));
    } else if (typeof courseContent === 'object' && courseContent !== null) {
      const info: { [key: string]: string } = {};
      Object.entries(courseContent).forEach(([key, value]) => {
        const caps = this.capitalizeFirstLetter(key);
        info[caps] = this.parseCourseContent(value);
      });
      return info;
    }
    return '';
  }

  fetchData(): void {
    this.http.get('componentOneData.json').subscribe((response: any) => {
      for (let [courseType, courseInfo] of Object.entries(response)) {
        let parsed = this.parseCourseType(courseType);
        if (parsed === 'Course Outcomes') parsed += ' (COs)';
        this.data[parsed] =
          Array.isArray(this.parseCourseContent(courseInfo)) &&
          typeof this.parseCourseContent(courseInfo) !== 'object'
            ? this.parseCourseContent(courseInfo)
            : this.parseCourseContent(courseInfo);
      }
    });
  }
}
