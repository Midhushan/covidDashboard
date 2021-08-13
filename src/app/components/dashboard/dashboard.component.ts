import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/srvices/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  maindata: any;
  isDataNotfound : boolean = false;
  isLocal: boolean = true;
  langid: number = 3;

  lang: {
    shinhala: false;
    tamil: false;
    english: true;
  } | undefined

  constructor(private comserve: CommonService,private route: ActivatedRoute ) {
      const id = comserve.getId();
      console.log(id)
      this.route.params.subscribe( params => {
        let id =  params;
        console.log(id)
     });

   }

  ngOnInit(): void {
     this.getMainData();
  }

  getMainData(){
    this.comserve.getCovidData().subscribe(data => {
        this.maindata = data['data'];
    },error => {
        this.isDataNotfound = true;
    })
  }

  onSelectionChange(id:number): void{
    this.langid = id;
  }

}
