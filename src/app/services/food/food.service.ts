import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id === id)!;
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Food1',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Food2',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 3,
        name: 'Food3',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_3.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 4,
        name: 'Food4',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 5,
        name: 'Food5',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 6,
        name: 'Food6',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 7,
        name: 'Food7',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 8,
        name: 'Food8',
        price: 90,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/food_8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      }
    ];
  }
}
