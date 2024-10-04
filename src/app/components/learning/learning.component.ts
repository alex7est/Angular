import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../model/course';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements OnInit{
  
  constructor(private service:CourseService) {}
  
  course!:Course

  ngOnInit(): void {
    this.course = this.service.getCourse()
  }

}
