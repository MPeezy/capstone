import { Component, Input, OnInit } from '@angular/core';
import{Duty} from '../Duty';
import { DutyService } from 'src/app/duty.service';

@Component({
  selector: 'app-update-duty',
  templateUrl: './update-duty.component.html',
  styleUrls: ['./update-duty.component.css'],
  providers: [DutyService]
})
export class UpdateDutyComponent implements OnInit {

  @Input() Id: number;
  duty: Duty;
  constructor(private dutyService: DutyService) {

  }

  ngOnInit() {
    this.dutyService.GetDuty(this.Id).subscribe(
      (response: any) => {
        console.log(response);
        this.duty = response;
      }
    );
  }

  UpdateDuty() {
    let name: string = (<HTMLInputElement>document.getElementById("Name")).value;
    console.log(name);
    let description: string = (<HTMLInputElement>document.getElementById("Description")).value;
    console.log(description);
    let due: string = (<HTMLInputElement>document.getElementById("Due")).value;
    console.log(due);
    let completed: string = (<HTMLInputElement>document.getElementById("Completed")).value;
    console.log(completed);

    let newDuty: Duty = { id: this.Id, name: name, description: description, due: due, completed: completed};
    
    this.dutyService.UpdateDuty(newDuty, this.Id).subscribe(
      (response: any) => { location.reload() }
    );
    
  }


}
