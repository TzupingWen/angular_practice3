import { Component, OnInit } from '@angular/core';
import { servicelist } from '../servicelist';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  servicelist = servicelist;

  constructor() { }

  ngOnInit(): void {
  }

}
