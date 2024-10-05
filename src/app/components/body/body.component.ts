import { Component, Input } from '@angular/core';
import { StudentsTableComponent } from "../students.table/students.table.component";
import { Student } from '../../model/student';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [StudentsTableComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Input()id!:number
  @Input()students!:Student[]
}
