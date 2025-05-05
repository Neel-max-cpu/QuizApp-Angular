import { Component } from '@angular/core';
import { CategoryGroup, groupedCategories } from '../../../../public/trivaCatagories';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// components ---
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectButton } from 'primeng/selectbutton'

// icon --
import { LucideAngularModule, Rocket } from 'lucide-angular';


//services ---
import { CategoryServiceService } from '../../services/category-service.service';

@Component({
  selector: 'app-categories-component',
  imports: [ButtonModule, CardModule, LucideAngularModule,FormsModule, SelectButton],
  templateUrl: './categories-component.component.html',
  styleUrl: './categories-component.component.css',
})
export class CategoriesComponentComponent {

  stateOptions: any[] = [{ label: '10', value: '10' },{ label: '15', value: '15' },{ label: '20', value: '20' }];  
  stateDiff : any[] = [{label:'easy', value:'easy'}, {label:'medium', value:'medium'}, {label:'hard', value:'hard'}];
  stateType : any[] = [{label:'Mulitple Choice', value:'multiple'}, {label:'True/False', value:'boolean'}]
  
  // icon --
  readonly RocketIcon = Rocket;

  valuesQ: any[] = [];
  valuesD: any[] = [];
  valuesT: any[] = [];

  groupData !: CategoryGroup;


  constructor(
    public router:Router,
    private categoryService:CategoryServiceService
  ){
    const nav = this.router.getCurrentNavigation();
    if(nav?.extras?.state && nav.extras.state['data']){
      this.groupData = nav.extras.state['data'] as CategoryGroup;      
      this.valuesQ = new Array(this.groupData.categories.length).fill(null);
      this.valuesD = new Array(this.groupData.categories.length).fill(null);
      this.valuesT = new Array(this.groupData.categories.length).fill(null);
    }
    else{
      this.router.navigate(['/']);
    }
  }

  goToQuizPage(index:number){
    const amount = this.valuesQ[index];
    const difficulty = this.valuesD[index];
    const type = this.valuesT[index];
    const categoryId = this.groupData.categories[index].id;

    const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=${type}`;
    console.log('Quiz app url: ', apiUrl);

    // save the previous
    this.categoryService.setPreviousCategory(this.groupData);

    // fetch and check first - 
    fetch(apiUrl)
    .then(response => response.json())
    .then(data=>{
      if(data.results && data.results.length >0){
        // valid
        this.router.navigate(['/quiz'], {state :{apiUrl}});
      }
      else{
        alert('No quiz questions available for this selection. Please try different settings.')
      }
    })
    .catch(err=>{
      console.log("error fetching: ", err);
      alert("An Error had occured while fetching backend error!");
    });
  }

  
}
