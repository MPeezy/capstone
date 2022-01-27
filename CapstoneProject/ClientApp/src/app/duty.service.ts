import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import {Duty} from './duty';

@Injectable({
  providedIn: 'root'
})
export class DutyService {
  url: string = "Duty";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
this.url = baseUrl + this.url;
  }

  GetDutyList() {
    return this.http.get(this.url);
  }

  GetDuty(id: number) {
    return this.http.get(this.url + "/get/" + id);
  }

  CreateDuty(d: Duty) {

    console.log(d);
    return this.http.post(this.url + "/makeNew/", d);
  }

  DeleteDuty(id: number){
    return this.http.delete(this.url + "/delete/" + id);
  }

  UpdateDuty(newDuty:Duty, id:number){
    return this.http.put(this.url + "/update/"+id, newDuty);

  }













}
