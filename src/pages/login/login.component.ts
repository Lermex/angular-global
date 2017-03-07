import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  styles: [`
  `],
  template: `
    <h1>Login</h1>
    <div>
      WIP
    </div>
  `
})
export class LoginComponent {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

}
