import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  selectedId: 3 | undefined;
  constructor() { }

  ngOnInit(): void {

  }

  langselect(id:number){

  }

}
