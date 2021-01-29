import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe('Crumble aux pommes', 'Gateaux avec des pommes cuites et de la garniture streusel', 'Dessert', 'https://www.atelierdeschefs.com/media/recette-e3687-crumble-de-pommes-et-poires.jpg'),
    new Recipe('Raviole au saumon', 'Pates à la creme fraiche garnies de saumon', 'Plat principale', 'https://www.saint-jean.fr/media/gratin-de-ravioles-au-saumon.jpg'),
    new Recipe('Cookie maison', "Cookie croustillant à l'exterieur et fondant à l'interieur", 'Dessert', 'https://img.over-blog-kiwi.com/1/02/97/00/20190411/ob_0f4a10_p1020833.JPG'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
