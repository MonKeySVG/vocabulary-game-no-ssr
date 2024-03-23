import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SyllableService {
  private currentSyllableSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentSyllable$: Observable<string> = this.currentSyllableSubject.asObservable();

  syllables: string[] = [];

  constructor(private http: HttpClient) {
    // Chargez les syllabes à partir du fichier texte lors de l'initialisation du service
    this.loadSyllables();
  }

  loadSyllables() {
    this.http.get('../assets/syllable-list.txt', { responseType: 'text' }).subscribe(data => {
      // Parsez le fichier texte pour extraire les syllabes individuelles
      const syllableArray = data.split('\n').map(syllable => syllable.trim());

      // Normalisez les syllabes pour enlever les accents
      const normalizedSyllables = syllableArray.map(syllable => this.normalizeSyllable(syllable));

      // Ajoutez les syllabes normalisées à la liste syllables
      this.syllables = normalizedSyllables;

      // Afficher les syllabes dans la console (facultatif)
      console.log('Syllabes chargées :', this.syllables);
    });
  }

  generateRandomSyllable() {
    const randomIndex = Math.floor(Math.random() * this.syllables.length);
    const randomSyllable = this.syllables[randomIndex];
    this.currentSyllableSubject.next(randomSyllable);
    console.log('Nouvelle syllabe aléatoire:', randomSyllable);
  }

  getCurrentSyllable(): string {
    return this.currentSyllableSubject.value;
  }

  private normalizeSyllable(syllable: string): string {
    // Utilisez une fonction de normalisation pour supprimer les accents
    return syllable.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
