import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// components ---
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { groupedCategories } from '../../../../public/trivaCatagories';

// icon ---
import { LucideAngularModule, Rocket } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, CommonModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgSpace = 'images/spaceImg.jpg';

  // from the ts file
  array = groupedCategories;

  // icon --
  readonly RocketIcon = Rocket;
}
