import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app/app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  selector: 'courses',
  providers: [
    Title
  ],
  styleUrls: [ 'courses.component.css' ],
  templateUrl: 'courses.component.html'
})
export class HomeComponent implements OnInit {
  public localState = { value: '' };

  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
