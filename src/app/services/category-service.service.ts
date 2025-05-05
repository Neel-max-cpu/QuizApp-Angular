import { Injectable } from '@angular/core';
import { CategoryGroup } from '../../../public/trivaCatagories';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  // previous category
  private previousCategoryGroup! :CategoryGroup;
  setPreviousCategory(data:CategoryGroup){
    this.previousCategoryGroup = data;
  }
  getPreviousCategory() : CategoryGroup | undefined {
    return this.previousCategoryGroup;
  }

  constructor() { }
}
