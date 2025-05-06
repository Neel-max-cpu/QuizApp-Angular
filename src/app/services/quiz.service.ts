import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions: any[] = [];

  setQuestions(qs: any[]){
    this.questions = qs;
  }

  getQuestions():any[]{
    return this.questions;
  }
  constructor() { }
}
