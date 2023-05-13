import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Component} from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({

selector: 'app-creatediet',

templateUrl: './creatediet.component.html',

styleUrls: ['./creatediet.component.css']

})

export class CreatedietComponent {

fontStyle?: string;

products: any;

constructor(private ps: ProductService) {

console.log('Constructor called');

this.ps.getProducts().subscribe({

next: (data) => {

this.products = data;

console.log('Products received:', data);

},

error: () => {

this.products = [];

console.log('Error occurred while fetching products');

}

});

}

basket: any[] = [];

drop(event: CdkDragDrop<any[]>) {

if (event.previousContainer === event.container) {

moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

} else {

const draggedItem = event.previousContainer.data[event.previousIndex];

const itemName = typeof draggedItem === 'object' ? draggedItem.name : draggedItem;

const itemQuantity = typeof draggedItem === 'object' ? draggedItem.quantity : 1;

this.basket.splice(event.currentIndex, 0, { name: itemName, quantity: itemQuantity });

}

}

clearBasket() {

this.basket = [];

}

totalCalories: number = 0;

totalFat: number = 0;

totalProtein: number = 0;

totalCarbs: number = 0;

totalFiber:number=0;

calculateNutrition() {

this.totalCalories = 0;

this.totalFat = 0;

this.totalProtein = 0;




this.totalCarbs = 0;




this.totalFiber=0;




for (let item of this.basket) {




const product = this.products.find((p: { name: any; }) => p.name === item.name);




if (product) {




const { calories, fats, proteins, carbs ,dietaryfiber} = product;




this.totalCalories += (item.quantity) * calories;




this.totalFat += (item.quantity) * fats;

this.totalProtein += (item.quantity) * proteins;

this.totalCarbs += (item.quantity) * carbs;

this.totalFiber +=(item.quantity)*dietaryfiber;

} else {

console.log(`Product not found for item ${item.name}`);

}

}

}




}