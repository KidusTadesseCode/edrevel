import { Component, Input, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
})
export class CellComponent implements OnInit {
  @Input() course: string = '';
  @Input() courseContent: any;
  @Input() color: string = '#000000';
  @Input() bgColor: string = '#ffffff';

  itemsPerRow: number = 3;
  colClass: string = '';

  ngOnInit(): void {
    this.setItemsPerRow();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setItemsPerRow();
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
  isDictionary(value: any): boolean {
    return typeof value === 'object' && !Array.isArray(value);
  }
  isString(value: any): boolean {
    return typeof value === 'string';
  }
  objectKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj);
  }

  getItemGroups(arr: any[], chunkSize: number): any[][] {
    const groups = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
  }
  setItemsPerRow(): void {
    const width = window.innerWidth;

    if (width < 576) {
      this.itemsPerRow = 1;
      this.colClass = 'col-12 rounded-2 mb-2';
    } else if (width >= 576 && width < 768) {
      this.colClass = 'col-sm-6 rounded-2 mb-2';
      this.itemsPerRow = 2;
    } else if (width >= 768) {
      this.colClass = 'col-md-4 rounded-2 mb-2';
      this.itemsPerRow = 3;
    }
  }
}
