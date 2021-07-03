import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  course = [1, 2];
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
  viewMode = 'map';
  onAdd() {
    this.courses.push({ id: 4, name: 'course' });
  }
  onRemove(course1) {
    let index = this.courses.indexOf(course1);
    this.courses.splice(index, 1);
  }
  onChange(course1) {
    course1.name = 'UPDATED';
  }
}
