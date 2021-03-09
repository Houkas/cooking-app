import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListEdit } from '../shopping-list/shopping-list-edit/shopping-list-edit.component';

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

    onIngredientAdded(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    }

}