import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categories', component: CategoriesComponentComponent },
    { path: '**', redirectTo: '' }, 
];
