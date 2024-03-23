import { Component } from '@angular/core';
import { CountdownService } from './countdown.service';
import { ScoreService} from "./score.service";
import { SyllableService} from "./syllable.service";
import {Subscription} from "rxjs";

enum GameState {
  Menu,
  Game,
  Score
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vocabulary-game';

  private gameOverSubscription: Subscription;

  constructor(
    private countdownService: CountdownService,
    private syllableService: SyllableService,
    private scoreService: ScoreService // Injection du service ScoreService
  ) {
    this.gameOverSubscription = this.countdownService.gameOver$.subscribe(() => {
      this.onGameOver();
    });

    this.backToMenu();
  }

  gameState: GameState = GameState.Menu;

  onStartGame() {
    this.gameState = GameState.Game;
    this.scoreService.resetScore();
    this.countdownService.resetCountdown();
    this.countdownService.startCountdown(5);

    this.syllableService.generateRandomSyllable();
  }

  onGameOver() {
    this.gameState = GameState.Score;
  }

  backToMenu() {
    this.gameState = GameState.Menu;
  }

  ngOnDestroy() {
    this.gameOverSubscription.unsubscribe();
  }

  protected readonly GameState = GameState;
}
