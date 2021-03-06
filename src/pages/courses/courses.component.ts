import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app/app.service';

@Component({
  selector: 'courses',
  styleUrls: [ 'courses.component.css' ],
  templateUrl: 'courses.component.html'
})
export class HomeComponent implements OnInit {
  public localState = { value: '' };

  constructor(
    public appState: AppState,
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
