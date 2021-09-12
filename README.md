# UiLoaders

### Angular user interface components used to show something loading.

## The components

- Progress bar

## **Progress bar**
selector : **lib-progress-bar**

### Shows the progress of something happening on a horizontal bar.

## Inputs - 

- **progress** : number
    - indicates how far along the bar is
    - values should be between 0 and 100
    - default = 0

- **width** : string
    - the width of the progress bar wrapper
    - '5px', '100%', etc
    - default = '100%'

- **height** : string
    - practically the same as the width except for height
    - default = '5px'

- **borderWidth** : number
    - the width of the border in pixels
    - default = 1

- **borderColor** : string
    - the color of the border
    - default = '#000'

- **barColor** : string
    - the color of the bar that moves
    - default = '#000'

## How to use

*app.module.ts*
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressBarModule } from 'ui-loaders' // important

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressBarModule // important
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

*app.component.html*
```html
<lib-progress-bar><lib-progress-bar/>
```