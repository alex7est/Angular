import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'tr[app-studentsrow]',
  standalone: true,
  imports: [],
  templateUrl: './students.row.component.html',
  styleUrl: './students.row.component.css'
})
export class StudentsRowComponent {
  @Input()student!:Student
}
