# Angular Simple Typewriter

> A simple angular standalone component for adding a nice typewriter effect to your project.

[![NPM](https://img.shields.io/npm/v/ngx-simple-typewriter.svg)](https://www.npmjs.com/package/ngx-simple-typewriter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-simple-typewriter) ![GitHub](https://img.shields.io/github/license/iabu94/ngx-simple-typewriter)

<p align="center">
  <img src="./screenshot.gif" alt="screenshot" />
</p>
 
## Install

#### npm

```sh
npm i ngx-simple-typewriter
```

#### Yarn

```sh
yarn add ngx-simple-typewriter
```

---

## Usage

You can use the standalone `Typewriter` component in your project.

## 1. Component

```typescript
import { Component } from '@angular/core';
import { Typewriter } from 'ngx-simple-typewriter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Typewriter],
  template: `
    <ngx-typewriter />
  `,
  styles: []
})
export class AppComponent {
}

```

### Component Input Properties

| Prop             |       Type        | Options  | Description                                                                                |      Default       |
| ---------------- | :---------------: | -------- | ------------------------------------------------------------------------------------------ | :----------------: |
| `words`          |       array       | Required | Array of strings holding the words                                                         | `['Hello', '...']` |
| `typeSpeed`      |      number       | Optional | Character typing speed in Milliseconds                                                     |        `80`        |
| `deleteSpeed`    |      number       | Optional | Character deleting speed in Milliseconds                                                   |        `50`        |
| `panelClass`     |      string       | Optional | CSS classes to be applied for the typewriter text (should be in global stylesheet)         |        `''`        |
---

### Usage Example

```ts
import { Component } from '@angular/core';
import { Typewriter } from 'ngx-simple-typewriter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Typewriter],
  template: `
    <div class="">
      Hello there, I am
      <ngx-typewriter
        [words]="words"
        [typeSpeed]="1000"
        [deleteSpeed]="100"
        [panelClass]="'text-color'"
      />
    </div>
  `,
})
export class AppComponent {
  words = ['Abdullah Mansoor', 'a Software Engineer', 'a Cricket Player'];
}
```
---
```css
// global stylesheet (styles.scss)
.text-color {
    color: red;
}
```

### [Demo] - Not yet

<br />

### License

MIT © [iabu94](https://github.com/iabu94/)