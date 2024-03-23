import {Component, HostListener} from '@angular/core';
import { SyllableService } from '../syllable.service';
import { FrenchDictionaryService } from '../french-dictionary.service';
import { CountdownService} from "../countdown.service";
import { ScoreService} from "../score.service";


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  userInput: string = '';

  constructor(
    private syllableService: SyllableService,
    private frenchDictionaryService: FrenchDictionaryService,
    private countdownService: CountdownService,
    private scoreService: ScoreService
  ) {}
  onEnter() {
    console.log('Texte entré par l\'utilisateur:', this.userInput);
    const userInputContainsSyllable = this.userInput.includes(this.syllableService.getCurrentSyllable());
    if (userInputContainsSyllable) {

      const isFrenchWord = this.frenchDictionaryService.isFrenchWord(this.userInput);

      if (isFrenchWord) {
        console.log('Le mot est un mot de la langue française.');

        this.countdownService.addTime(5);

        const scoreIncrement = this.userInput.length; // Calculer le nombre de lettres du mot
        this.scoreService.incrementScore(scoreIncrement);

        this.syllableService.generateRandomSyllable();
      } else {
        console.log('Le mot n\'est pas un mot de la langue française.');


      }


      console.log('Le mot contient la syllabe actuelle.');



    } else {
      console.log('Le mot ne contient pas la syllabe actuelle.');

    }

    // Réinitialiser l'entrée utilisateur
    this.userInput = '';
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
      document.getElementById('userInput')?.focus();
    }
}
