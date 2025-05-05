import { Component, OnDestroy, OnInit } from '@angular/core';


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
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [ButtonModule, CardModule, LucideAngularModule,ProgressBar, ToastModule, NgFor, NgClass, NgIf],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit, OnDestroy {
  readonly X = X;

  quizQuestions: any[] = [];
  currentIndex = 0;
  currentQuestion : any;
  shuffledOptions : string[] = [];

  selectedAnswer: string | null = null;
  isCorrect: boolean | null = null;

  isSubmitted: boolean = false;
  score:number = 0;

  quizFinished: boolean = false;


  timer: any;
  // seconds
  timerLeft = 12;

  // progress bar -
  value: number = 0;
  interval: any;

  constructor(
    private router:Router,
    private categoryService:CategoryServiceService,
    
  ){};

  ngOnInit(): void {
    this.quizQuestions = this.getMockQuestions(); 
    this.loadQuestion();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  goBackToCategory(){
    const previousCategory = this.categoryService.getPreviousCategory()

    if(previousCategory){
      this.router.navigate(['/categories'], {state: {data:previousCategory}});
    }
    else{
      this.router.navigate(['/']);
    }
  }

  startTimer(){
    const totalTime = 12;
    this.timer = setInterval(() => {
      this.timerLeft--;
      this.value = ((totalTime-this.timerLeft)/totalTime)*100; // for the progress bar

      if(this.timerLeft<=0){
        this.clearTimer();
        this.autoSubmit();    //no answer selected show the correct answer
      }
    }, 1000);
  }

  clearTimer(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  selectAnswer(option: string) {
    if (this.isSubmitted) return; // prevent change after submit
    this.selectedAnswer = option;
  }

  submitAnswer() {
    if (!this.selectedAnswer || this.isSubmitted) return;
  
    this.clearTimer();
    this.isSubmitted = true;
  
    const correct = this.selectedAnswer === this.currentQuestion.correct_answer;
    if (correct) this.score++;
  
    this.showAnswer();  
  }

  autoSubmit(){
    if(this.isSubmitted) return;
    this.isSubmitted = true;
    this.showAnswer();
  }

  showAnswer() {
    setTimeout(() => {
      this.currentIndex++;
      this.loadQuestion();
    }, 2000);
  }

  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  // Just for demo/testing
  getMockQuestions() {
    return [
      {
        question: "Which of these book series is by James Patterson?",
        correct_answer: "Maximum Ride",
        incorrect_answers: ["Harry Potter", "The Legend of Xanth", "The Bartemaeus Trilogy"]
      },
      {
        question: "Where is Paddington Bear from?",
        correct_answer: "Peru",
        incorrect_answers: ["India", "Iceland", "Canada"]
      },
      // Add more sample questions if needed...
    ];
  }


  loadQuestion() {
    this.clearTimer();
  
    if (this.currentIndex < this.quizQuestions.length) {
      this.currentQuestion = this.quizQuestions[this.currentIndex];
      const options = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
  
      this.shuffledOptions = this.shuffleArray(options);
      this.selectedAnswer = null;
      this.isCorrect = null;
      this.timerLeft = 12;
      this.value = 0;   // <-- RESET PROGRESS BAR
      this.isSubmitted = false; // <-- RESET FLAG
      this.startTimer();
    } else {
      this.endQuiz();
    }
  }


  mainPage() {
    this.router.navigate(['/']);
  }

  endQuiz() {
    this.quizFinished = true;
  }
}
