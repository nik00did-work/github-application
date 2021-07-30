import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.less']
})
export class ToggleButtonComponent {
  @Input() selectedItem: string = '';
  @Input() itemList: string[] = [];

  @Output() onChangeCallback = new EventEmitter();

  public onChangeItem(value: string) {
    this.onChangeCallback.emit(value);
  }
}
