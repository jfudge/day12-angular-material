import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private spacexService: SpacexService,
  ) { }

  starlinkSat: any;

  ngOnInit(): void {
    this.spacexService.get('rockets').subscribe((data: any) => {
      this.starlinkSat = data;
      console.log(data);
    });
  }

}
