import { Component, OnInit } from '@angular/core';
import { OccupancyService } from 'src/app/services/occupancy.service';

@Component({
  selector: 'app-historicaloccupancy',
  templateUrl: './historicaloccupancy.component.html',
  styleUrls: ['./historicaloccupancy.component.css']
})
export class HistoricaloccupancyComponent implements OnInit {

  historicalDataDining=null;
  historicalDataService=null;

  constructor(private occupancyService: OccupancyService) {
    this.getHistoricalDataDiningDetails();
    this.getHistoricalDataServiceDetails();
   }

  ngOnInit(): void {
  }
  getHistoricalDataDiningDetails(){
    this.occupancyService.getHistoricalDataDining().subscribe(
      (resp)=>{
        console.log(resp);
        this.historicalDataDining=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }


  getHistoricalDataServiceDetails(){
    this.occupancyService.getHistoricalDataService().subscribe(
      (resp)=>{
        console.log(resp);
        this.historicalDataService=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
