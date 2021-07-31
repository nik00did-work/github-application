import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RepositoryItem } from '../../../core/models';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.less']
})
export class RepositoryItemComponent {
  @Input() item: RepositoryItem = {};
  @Input() keyList: string[] = [];

  @Output() onClickItem = new EventEmitter();

  public handleItemClick(item: any) {
    this.onClickItem.emit(item.url);
  }
}
