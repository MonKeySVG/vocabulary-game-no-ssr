import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SyllableService} from "./syllable.service";
import { FrenchDictionaryService} from "./french-dictionary.service";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoreSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  score$: Observable<number> = this.scoreSubject.asObservable();

  constructor(private syllableService: SyllableService,
              private frenchDictionaryService: FrenchDictionaryService
  ) {}



  incrementScore(value: number) {
    const currentScore = this.scoreSubject.value;
    this.scoreSubject.next(currentScore + value);
  }

  resetScore() {
    this.scoreSubject.next(0); // Réinitialiser le score à zéro
  }

  getPossibleWords(lastSyllable: string): Observable<string[]> {
    return this.frenchDictionaryService.getFrenchWordsWithSyllable(lastSyllable);
  }

}
