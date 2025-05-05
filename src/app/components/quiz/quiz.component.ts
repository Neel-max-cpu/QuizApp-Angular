import { Component, OnInit } from '@angular/core';


// components ---
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

// icon --
import { LucideAngularModule, X  } from 'lucide-angular';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../../services/category-service.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-quiz',
  imports: [ButtonModule, CardModule, LucideAngularModule,ProgressBar, ToastModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  readonly X = X;

  // progress bar -
  value: number = 0;
  interval: any;

  constructor(
    private router:Router,
    private categoryService:CategoryServiceService,
    
  ){};

  goBackToCategory(){
    const previousCategory = this.categoryService.getPreviousCategory()

    if(previousCategory){
      this.router.navigate(['/categories'], {state: {data:previousCategory}});
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
