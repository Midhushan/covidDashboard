import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/srvices/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  maindata: any;
  isDataNotfound : boolean = false;

  constructor(private comserve: CommonService ) { }

  ngOnInit(): void {
     this.getMainData();
  }

  getMainData(){
    this.comserve.getCovidData().subscribe(data => {
        this.maindata = data;
        console.log(data)
    },error => {
        console.log(error)
        this.isDataNotfound = true;
    })
  }

}
