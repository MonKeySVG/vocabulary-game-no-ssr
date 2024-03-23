import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private countdownSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  countdown$: Observable<number> = this.countdownSubject.asObservable();

  private countdownTimer: any;

  countdownStarted: boolean = false;

  isGameOver = false;


  constructor() {}

  private gameOverSubject: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);
  gameOver$: Observable<void> = this.gameOverSubject.asObservable();


  startCountdown(initialTime: number) {
    this.countdownSubject.next(initialTime);

    this.countdownTimer = setInterval(() => {
      const currentTime = this.countdownSubject.value;
      if (currentTime > 0) {
        this.countdownSubject.next(currentTime - 1);
      } else {
        if (!this.isGameOver) {
          this.gameOver();
          this.isGameOver = true;
        }

      }
    }, 1000);
  }

  gameOver() {
    this.stopCountdown();
    this.countdownStarted = false
    this.gameOverSubject.next();
  }

  stopCountdown() {
    clearInterval(this.countdownTimer);
  }

  resetCountdown() {
    this.stopCountdown();
    this.isGameOver = false;
    this.countdownSubject.next(0);
  }

  addTime(time: number) {
    const newTime = this.countdownSubject.value + time;
    this.countdownSubject.next(Math.min(newTime, 15));
  }
}
