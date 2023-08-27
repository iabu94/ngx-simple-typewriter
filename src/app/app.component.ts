import { Component } from '@angular/core';
import { TypewriterComponent } from 'typewriter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TypewriterComponent],
  template: `
    <ngx-typewriter />
  `,
  styles: []
})
export class AppComponent {
  title = 'ngx-simple-typewriter';
}
