import { Injectable } from '@angular/core';
import { CategoryGroup } from '../../../public/trivaCatagories';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  // previous category
  private previousCategoryGroup! :CategoryGroup;
  private apiUrl :string | null = null;

  setPreviousCategory(data:CategoryGroup){
    this.previousCategoryGroup = data;
  }
  getPreviousCategory() : CategoryGroup | undefined {
    return this.previousCategoryGroup;
  }

  setapiUrl(url:string){
    this.apiUrl = url;
  }

  getApiUrl():string | null{
    return this.apiUrl;
  }

  constructor() { }
}
