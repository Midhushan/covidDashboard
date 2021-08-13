import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covidDashboard';

  constructor(private route: ActivatedRoute){
    route.params.subscribe( params => {
      console.log(params)
  });
  }
}
