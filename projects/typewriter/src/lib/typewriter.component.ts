import {Component, Input, OnInit, computed, signal, input} from '@angular/core';

@Component({
  selector: 'ngx-typewriter',
  standalone: true,
  template: ` <span [className]="panelClass()">{{ text() }}</span> `,
})
export class Typewriter implements OnInit {
  words = input<string[]>(['Hello World!', 'This is', 'a simple Typewriter']);
  typeSpeed = input(80);
  deleteSpeed = input(50);
  panelClass = input('');
  loop = input(0);

  private wordIndex = signal(0);
  private word = computed(() => this.words()[this.wordIndex()]);

  private textIndex = signal(0);
  protected text = computed(() => this.word().slice(0, this.textIndex()));

  private currentLoopCount = signal(0);

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
    }, this.typeSpeed());
  }

  delete() {
    const int = setInterval(() => {
      this.textIndex.update((v) => v - 1);
      if (this.textIndex() < 0) {
        this.wordIndex.update((v) => (v + 1) % this.words().length);
        clearInterval(int);
        this.textIndex.set(0);
        if (this.loop() > 0) {
          this.currentLoopCount.update((v) => v + 1);
          if (this.currentLoopCount() < this.loop()) {
            this.type();
          } else {
            this.wordIndex.set(this.words().length - 1);
            this.textIndex.set(this.word().length);
          }
        } else {
          this.type();
        }
      }
    }, this.deleteSpeed());
  }
}
