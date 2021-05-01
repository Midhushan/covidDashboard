import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getCovidData(){
    return this.http.get<any>('https://www.hpb.health.gov.lk/api/get-current-statistical');
  }
}
