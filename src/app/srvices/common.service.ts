import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  getCovidData(){
    return this.http.get<any>('https://www.hpb.health.gov.lk/api/get-current-statistical');
  }

  getId(){
    this.route.params.subscribe( params => {
     let id =  params;
     console.log(id)
     return id;
  });
  }
}
