import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../model/course';
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [HeaderComponent, BodyComponent],
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
