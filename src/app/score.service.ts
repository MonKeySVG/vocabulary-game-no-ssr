import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoreSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  score$: Observable<number> = this.scoreSubject.asObservable();

  constructor() {}

  incrementScore(value: number) {
    const currentScore = this.scoreSubject.value;
    this.scoreSubject.next(currentScore + value);
  }

  resetScore() {
    this.scoreSubject.next(0); // Réinitialiser le score à zéro
  }

}
