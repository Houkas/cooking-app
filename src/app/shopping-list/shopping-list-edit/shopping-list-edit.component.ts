import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
    selector:'app-shoppingListEdit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrls:['./shopping-list-edit.component.css']
})

export class shoppingListEdit {

    @ViewChild('nameInput')nameInputRef:ElementRef;
    @ViewChild('amountInput')amountInputRef:ElementRef;
    @Output() IngredientAdded = new EventEmitter<Ingredient>();

    onAddItem(){
        const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
        this.IngredientAdded.emit(newIngredient);   
    }
}