import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];
  constructor() { }

  ngOnInit(): void { }
}
