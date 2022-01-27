import { Component, OnInit } from '@angular/core';
import { Duty } from '../Duty';
import { DutyService } from '../duty.service';
@Component({
  selector: 'app-full-crud',
  templateUrl: './full-crud.component.html',
  styleUrls: ['./full-crud.component.css'], 
  providers: [DutyService]
})
export class FullCrudComponent implements OnInit {

  dutys?: Duty[] = [];
  constructor(private dutyService: DutyService) {
     
    this.dutyService.GetDutyList().subscribe(

     
      (response: any) => { this.dutys = response }
    )
  }

  ngOnInit() {
  }

  DeleteEntry(id: number, index: number) {
    this.dutyService.DeleteDuty(id).subscribe(
      (response: any) => {
        console.log(id + " was deleted successfully from our database");
     
        this.dutys.splice(index, 1);
      }
    );
  }

  EditDuty(id: number) {
    let displayPanel = document.getElementById("display" + id);
    let editPanel = document.getElementById("edit" + id);

    //If the display is the string empty, by default the element is being shown 
    if (displayPanel.style.display === ""
      || displayPanel.style.display === "inherit") {
      displayPanel.style.display = "none";
      editPanel.style.display = "inherit";
    }
    else if (displayPanel.style.display === "none") {
      displayPanel.style.display = "inherit";
      editPanel.style.display = "none";
    }
  }


}
