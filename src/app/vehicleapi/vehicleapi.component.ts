import { Component } from '@angular/core';
// import api的service
import { TestapiService } from '../testapi.service';

@Component({
  selector: 'app-vehicleapi',
  templateUrl: './vehicleapi.component.html',
  styleUrls: ['./vehicleapi.component.css']
})
export class VehicleapiComponent {
  data;

  constructor(
    private testapi: TestapiService
  ) { 

    // get()取得api資料後呈現
    this.testapi.getData().subscribe(data =>{
      console.log(data);
      this.data = data;
    })
   }

}
