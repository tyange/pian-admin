import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  imports: [NgIf, NgForOf],
})
export class PaginatorComponent implements OnInit {
  @Input() pageCounts: number = 0;
  @Output() pageChangeEvent = new EventEmitter<number>();

  activePageNum = 0;
  pageCountsArray: number[] = [];
  showingCountsArray: number[] = [];
  endPageNum = 0;

  ngOnInit() {
    let length = this.pageCounts;

    const pageNumArray = Array.from(
      { length: length },
      (value, index) => index + 1
    );
    this.pageCountsArray = pageNumArray;

    this.endPageNum = this.pageCounts;

    if (this.pageCounts > 5) {
      this.showingCountsArray = pageNumArray.slice(0, 5);
      return;
    }

    this.showingCountsArray = pageNumArray;
  }

  pageChangeHandler(pageNum: number) {
    this.activePageNum = pageNum - 1;
    this.pageChangeEvent.emit(pageNum - 1);

    if (this.activePageNum < 5) {
      this.showingCountsArray = this.pageCountsArray.slice(0, 5);
      return;
    } else if (this.activePageNum >= this.pageCounts - 3) {
      this.showingCountsArray = this.pageCountsArray.slice(
        this.pageCounts - 5,
        this.pageCounts
      );
      return;
    }

    return this.pageCountsArray.slice(
      this.activePageNum - 3,
      this.activePageNum + 2
    );
  }
}
