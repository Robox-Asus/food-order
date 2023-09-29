import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private fs: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.foods = this.fs.getAll().filter(item => item.name.toLowerCase().includes(params['id'].toLowerCase()));
      } else {
        this.foods = this.fs.getAll();
      }
    })
  }

} 
