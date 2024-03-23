import { Component } from '@angular/core';
import {FrenchDictionaryService} from "../french-dictionary.service";
import { SyllableService} from "../syllable.service";
import {ScoreService} from "../score.service";

@Component({
  selector: 'app-possible-words',
  templateUrl: './possible-words.component.html',
  styleUrl: './possible-words.component.css'
})
export class PossibleWordsComponent {
  possibleWords: string[] = [];
  lastSyllable: string = "";

  constructor(private frenchDictionaryService: FrenchDictionaryService,
              private syllableService: SyllableService
  ) {}

  ngOnInit() {

    this.lastSyllable = this.syllableService.getCurrentSyllable(); // Vous devez implémenter cette méthode dans votre service de syllabe

    // Récupérer les mots possibles avec la dernière syllabe
    this.frenchDictionaryService.getFrenchWordsWithSyllable(this.lastSyllable).subscribe(words => {
      this.possibleWords = words;
    });
  }
}
