import { Component } from '@angular/core';
import { TypewriterComponent } from 'typewriter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TypewriterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-simple-typewriter';
}
