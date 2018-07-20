import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Encapsule css for component, Emulated is default value (Encapsulation), None disable encapsulation, Native supported by some browsers, for native users
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string}; 

  constructor() { }

  ngOnInit() {
  }

}
