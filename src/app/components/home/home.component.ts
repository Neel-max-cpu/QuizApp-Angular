import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// components ---
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

// triva ---
import { CategoryGroup, groupedCategories } from '../../../../public/trivaCatagories';

// icon ---
import { LucideAngularModule, Rocket } from 'lucide-angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, CommonModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  // imgSpace = 'images/spaceImg.jpg';

  // from the ts file
  array = groupedCategories;

  // icon --
  readonly RocketIcon = Rocket;
  
  // routing --
  constructor(private router:Router){}
  goToCategory(group:CategoryGroup){
    this.router.navigate(['/categories'],{
      state:{data:group}
    });
  }

}
