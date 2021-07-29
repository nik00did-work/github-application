import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent {
  @Input() size: number =  20;
  @Input() strokeWidth: number = 2;
  @Input() strokeColor: string = 'darkslategrey';
  @Input() strokeOpacity: number = 0.5;
}
