import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ------------------------------------------- STATE -------------------------------------------
  @Input() progress = 0

  // ------------------------------------------- STYLES -------------------------------------------

  @Input() width: string = "100%"
  @Input() height: string = "5px"
  @Input() borderWidth: number = 1
  @Input() borderColor: string = "#000"
  @Input() barColor: string = "#000"

  wrapperStyles(): {} {
    return {
      width: this.width,
      height: this.height,
      border: `${this.borderWidth}px solid ${this.borderColor}`
    }
  }

  loadingBarStyles(): {} {
    return {
      backgroundColor: this.barColor,
      width: `${this.progress}%`
    }
  }
}
