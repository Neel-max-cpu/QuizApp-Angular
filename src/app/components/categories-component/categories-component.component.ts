import { Component } from '@angular/core';
import { CategoryGroup, groupedCategories } from '../../../../public/trivaCatagories';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

// components ---
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectButton } from 'primeng/selectbutton'
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

// icon --
import { LucideAngularModule, Rocket } from 'lucide-angular';


//services ---
import { CategoryServiceService } from '../../services/category-service.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-categories-component',
  imports: [ButtonModule, CardModule, LucideAngularModule,FormsModule, SelectButton,HttpClientModule,Toast],
  providers:[MessageService],
  templateUrl: './categories-component.component.html',
  styleUrl: './categories-component.component.css',
})
export class CategoriesComponentComponent {

  stateOptions: any[] = [{label:'5', value:'5'},{ label: '10', value: '10' },{ label: '15', value: '15' },{ label: '20', value: '20' }];  
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
    private categoryService:CategoryServiceService,
    private quizService:QuizService,
    private http:HttpClient,
    private messageService: MessageService
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




  decodeHTML(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
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
    this.http.get(apiUrl).subscribe({
      next: (data: any) => {
        if (data.results && data.results.length > 0) {
          const formattedQuestions = data.results.map((q: any) => ({
            question: this.decodeHTML(q.question),
            correct_answer: this.decodeHTML(q.correct_answer),
            incorrect_answers: q.incorrect_answers.map((ans: string) => this.decodeHTML(ans))
          }));
  
          this.quizService.setQuestions(formattedQuestions);
          this.router.navigate(['/quiz']);
        } else {
          // alert('No quiz questions available for this selection. Please try different settings.');
          // toast --
          this.messageService.add({ 
            severity: 'warn', 
            summary: 'No Questions Found', 
            detail: 'No quiz questions available for this selection. Please try different settings.', 
            life: 4000 
          });
        }
      },
      error: (err) => {
        console.error('Error fetching questions:', err);
        // alert('An error occurred while fetching quiz questions.');
        // toast --
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Fetch Error', 
          detail: 'An error occurred while fetching quiz questions.', 
          life: 4000 
        });
      }
    });
  }

  
}
