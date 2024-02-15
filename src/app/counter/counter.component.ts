import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
