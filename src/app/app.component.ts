import {Component, OnInit} from '@angular/core';

import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public foods;
  title = 'we-code-land';
  count = 0;
  nom: any;
  constructor(private _appService: AppService) {}
  ngOnInit() {
  this.getFoods();
   this.getCount();
  }

  getCount() {
    this._appService.getCount().subscribe(
      data => { this.count = data.count; }

    );
  }

  getFoods() {
   this._appService.getFoods().subscribe(
      data => { this.foods = data; }

   );
  }

  createUser() {
    this._appService.createUser(this.nom).subscribe(
      data => { console.log('personne added successfully');}

    );
  }
}
