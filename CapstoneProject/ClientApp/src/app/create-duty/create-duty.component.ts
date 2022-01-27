import { Component, OnInit } from '@angular/core';
import{Duty} from '../duty';
import { DutyService } from '../duty.service';

@Component({
  selector: 'app-create-duty',
  templateUrl: './create-duty.component.html',
  styleUrls: ['./create-duty.component.css'],
  providers: [DutyService]
})
export class CreateDutyComponent implements OnInit {

  constructor(private dutyService: DutyService) { }

  ngOnInit() {
  }

  CreateDuty() {
    let name: string = (<HTMLInputElement>document.getElementById("Name")).value;
    console.log(name);
    let description: string = (<HTMLInputElement>document.getElementById("Description")).value;
    console.log(description);
    let due: string = (<HTMLInputElement>document.getElementById("Due")).value;
    console.log(due);
    let completed: string = (<HTMLInputElement>document.getElementById("Completed")).value;
    console.log(completed);

    let newDuty: Duty = { id: 0, name: name, description: description, due: due, completed: completed};
    
    this.dutyService.CreateDuty(newDuty).subscribe(
      (response: any) => { console.log("It worked!") }
    );
  }

}
