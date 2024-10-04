import { Injectable } from '@angular/core';
import { CourseData } from '../data/course.data';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private course:Course = CourseData

  getCourse():Course {
    return CourseData
  }
}
