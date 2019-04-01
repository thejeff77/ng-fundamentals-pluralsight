import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { EventService } from './shared';

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
      em {float:right; color:#E05C65; padding-left: 10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color:#999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent implements OnInit {
  // event: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit() {
    // this.event = {
    //   name: 'Huge Event for Fun',
    //   date: '1/1/2307',
    //   time: '10am',
    //   price: 1000000.50,
    //   location: {
    //     address: '721 End-of-days Ave.',
    //     city: 'Underworld',
    //     country: 'Earth'
    //   },
    //   onlineUrl: 'www.google.com',
    //   imageUrl: 'https://searchengineland.com/figz/wp-content/seloads/2016/05/urlguide.jpg'
    // }
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
