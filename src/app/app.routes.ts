import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';
import { QuizComponent } from './components/quiz/quiz.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categories', component: CategoriesComponentComponent },
    { path: 'quiz', component:QuizComponent},
    
    // wild card should always be last
    { path: '**', redirectTo: '' }, 
];
