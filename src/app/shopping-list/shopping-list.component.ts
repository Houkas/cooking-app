import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector:'app-shoppingList',
    templateUrl:'./shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})

export class shoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Farine',1),
        new Ingredient('Beurre',1),
    ];

    constructor(){

    }

    ngOnInit():void{
        
    }

}