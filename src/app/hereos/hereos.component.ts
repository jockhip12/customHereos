import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './model/datas/mock-hereos';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {

hero: Hero = {
    id: 1,
    name: 'Windstorm'
};

heroes = HEROES;
selectedHero: Hero;


constructor() { }

ngOnInit() {}

onSelect(hero: Hero): void {
    this.selectedHero = hero;
}

}
