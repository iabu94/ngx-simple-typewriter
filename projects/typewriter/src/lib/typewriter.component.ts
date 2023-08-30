import { Component, Input, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'ngx-typewriter',
  standalone: true,
  imports: [],
  template: `
  <span [className]="panelClass">{{text()}}</span>
  `,
})
export class Typewriter implements OnInit {
  @Input() words = ['Hello World!', 'This is', 'a simple Typewriter'];
  @Input() typeSpeed = 80;
  @Input() deleteSpeed = 50;
  @Input() panelClass = '';

  wordIndex = signal(0);
  word = computed(() => this.words[this.wordIndex()]);

  textIndex = signal(0);
  text = computed(() => this.word().slice(0, this.textIndex()));

  ngOnInit(): void {
      this.type();
  }

  type() {
    const int = setInterval(() => {
      this.textIndex.update((v) => v + 1);
      if (this.textIndex() > this.word().length) {
        clearInterval(int);
        this.delete();
      }
    }, this.typeSpeed);
  }

  delete() {
    const int = setInterval(() => {
      this.textIndex.update((v) => v - 1);
      if (this.textIndex() < 0) {
        this.wordIndex.update((v) => (v + 1) % this.words.length);
        clearInterval(int);
        this.textIndex.set(0);
        this.type();
      }
    }, this.deleteSpeed);
  }
}
