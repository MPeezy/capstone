import { Component, OnInit } from '@angular/core';
import { Convert, Duty } from '../Duty';
import { DutyService } from '../duty.service';


@Component({
  selector: 'app-duty-list',
  templateUrl: './duty-list.component.html',
  styleUrls: ['./duty-list.component.css'],
  providers: [DutyService]
})
export class DutyListComponent implements OnInit {

  currentDuty?: Duty;
  constructor(private dutyDAL: DutyService) { }

  
  ngOnInit() {
    //subscribe attaches an observable and waits for it to finish calling the api 
    //When the service is done running, subscribe will react by running the method 
    //we pass into it. 
    this.dutyDAL.GetDuty(3).subscribe(
      (response: any) => {
        console.log(response);
        let json = Convert.dutyToJson(response);
        this.currentDuty = Convert.toDuty(json);
        console.log(this.currentDuty);
      }

      
    );

  }

}
