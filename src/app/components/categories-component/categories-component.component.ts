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

@Component({
  selector: 'app-categories-component',
  imports: [ButtonModule, CardModule, LucideAngularModule,FormsModule, SelectButton],
  templateUrl: './categories-component.component.html',
  styleUrl: './categories-component.component.css',
})
export class CategoriesComponentComponent {

  stateOptions: any[] = [{ label: '10', value: '10' },{ label: '15', value: '15' },{ label: '20', value: '20' }];
  value: string = 'off';
  
  // icon --
  readonly RocketIcon = Rocket;


  groupData !: CategoryGroup;

  constructor(public router:Router){
    const nav = this.router.getCurrentNavigation();
    if(nav?.extras?.state && nav.extras.state['data']){
      this.groupData = nav.extras.state['data'] as CategoryGroup;      
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
