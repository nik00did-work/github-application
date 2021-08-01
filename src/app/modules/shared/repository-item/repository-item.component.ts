import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRepositoryItem } from '../../../core/models';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.less']
})
export class RepositoryItemComponent {
  @Input() item: IRepositoryItem = {};
  @Input() keyList: string[] = [];

  @Output() onClickItem = new EventEmitter();

  public handleItemClick(item: IRepositoryItem): void {
    this.onClickItem.emit(item.url);
  }
}
