import { Component } from '@angular/core';
import { ZigramApiService } from '../app/zigram-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zigram-assignment';
  cocktailList: Array<object> = [];
  randomCocktailList: Array<object> = [];
  ingredientList: Array<object> = [];
  categoryList: Array<object> = [];
  timer;
  timer2;
  timer3;
  filterType: string = 'name';
  constructor(private service: ZigramApiService) {
    this.randomCocktail();
  }
  getCockFirstName(name) {
    this.service.get('1/search.php', { 's': name.target.value }).subscribe((res: Array<object>) => {
      this.cocktailList = res['drinks'];
      console.log(res)
    })
  }
  getByIngredients(name) {
    this.service.get('1/filter.php', { 'i': name.target.value }).subscribe((res: Array<object>) => {
      this.ingredientList = res['drinks'];
      console.log(res)
    })
  }
  onKeyUp(e) {
    let context = this, args = arguments;
    if (this.timer)
      clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.getCockFirstName.apply(context, args);
    }, 2000);

  }
  onKeyUp2(e) {
    let context = this, args = arguments;
    if (this.timer2)
      clearTimeout(this.timer2)
    this.timer2 = setTimeout(() => {
      this.getByIngredients.apply(context, args);
    }, 1000);

  }

  randomCocktail() {
    this.service.get('1/random.php').subscribe((res: Array<object>) => {
      this.randomCocktailList = res['drinks'];
    })
  }
  sortIngredients() {
    this.ingredientList.sort((a: any, b: any): any => {
      let x = a.idDrink.toLowerCase();
      let y = b.idDrink.toLowerCase();
      if (x < y)
        return -1
      else if (x > y)
        return 1;

      return 0;
    })
  }
  sortName() {
    this.cocktailList.sort((a: any, b: any): any => {
      let x = a.idDrink.toLowerCase();
      let y = b.idDrink.toLowerCase();
      if (x < y)
        return -1
      else if (x > y)
        return 1;

      return 0;
    })
  }
  sortCategories() {
    this.categoryList.sort((a: any, b: any): any => {
      let x = a.idDrink.toLowerCase();
      let y = b.idDrink.toLowerCase();
      if (x < y)
        return -1
      else if (x > y)
        return 1;

      return 0;
    })
  }

  getByCategories(name) {
    this.service.get('1/filter.php', { 'c': name.target.value }).subscribe((res: Array<object>) => {
      this.categoryList = res['drinks'];
      console.log(res)
    })
  }
  onKeyUp3(e) {
    let context = this, args = arguments;
    if (this.timer3)
      clearTimeout(this.timer3)
    this.timer3 = setTimeout(() => {
      this.getByCategories.apply(context, args);
    }, 1000);

  }
  displayType(type: string) {
    this.filterType = type
  }
}
