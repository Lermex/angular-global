import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course-details',
  styles: [`
  `],
  template: `
    <h1>Course Details</h1>
    <div>
      WIP
    </div>
  `
})
export class CourseDetailsComponent {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

}
