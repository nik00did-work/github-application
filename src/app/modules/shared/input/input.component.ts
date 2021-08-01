import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {
  @Input() public value: string = '';
  @Input() public title: string = '';
  @Input() public placeHolder: string = '';

  @Output() public onInputCallback = new EventEmitter();

  public onInput(event: Event): void {
    const value = (<HTMLInputElement> event.target).value;

    this.onInputCallback.emit(value);
  }
}
