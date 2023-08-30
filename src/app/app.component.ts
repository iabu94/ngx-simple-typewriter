import { Component } from '@angular/core';
import { Typewriter } from 'ngx-simple-typewriter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Typewriter],
  template: `
    <div class="">
      Hello there, I am
      <ngx-typewriter [words]="words" [typeSpeed]="1000" [deleteSpeed]="100" />
    </div>
  `,
})
export class AppComponent {
  words = ['Abdullah Mansoor', 'a Software Engineer', 'a Cricket Player'];
}
