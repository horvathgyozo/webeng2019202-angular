import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() status = 'ALL';
  @Output() statusChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleStatusChange() {
    this.statusChange.emit(this.status);
  }

}
