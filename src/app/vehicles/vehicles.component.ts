import { Component, OnInit } from '@angular/core';
import { cars } from '../cars';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  cars = cars;

  constructor() { }

  ngOnInit(): void {
  }

}
