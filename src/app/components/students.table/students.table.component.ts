import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';
import { StudentsRowComponent } from "../students.row/students.row.component";

@Component({
  selector: 'app-studentstable',
  standalone: true,
  imports: [StudentsRowComponent],
  templateUrl: './students.table.component.html',
  styleUrl: './students.table.component.css'
})
export class StudentsTableComponent {
  @Input()students!:Student[]
}
