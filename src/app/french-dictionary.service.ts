import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrenchDictionaryService {

  frenchWords: Set<string> = new Set<string>();

  constructor(private http: HttpClient) {
    // Chargez la liste de mots français lors du démarrage de l'application
    this.loadFrenchWords();
  }

  private loadFrenchWords() {
    this.http.get('../assets/french-dictionary.txt', { responseType: 'text' }).subscribe(data => {
      // Parsez le fichier texte pour extraire les mots individuels et les ajouter à l'ensemble
      const wordsArray = data.split('\n');
      wordsArray.forEach(word => {
        const normalizedWord = this.normalizeWord(word);
        this.frenchWords.add(normalizedWord.trim().toLowerCase());
      });
    });
  }

  private normalizeWord(word: string): string {
    // Utilisez une fonction de normalisation pour supprimer les accents
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  isFrenchWord(word: string): boolean {
    // Normalisez le mot entré par l'utilisateur en supprimant les accents
    const normalizedWord = this.normalizeWord(word.trim().toLowerCase());
    // Vérifiez si le mot normalisé est présent dans l'ensemble de mots français
    return this.frenchWords.has(normalizedWord);
  }

  getFrenchWordsWithSyllable(syllable: string): Observable<string[]>{
    // Convertissez l'ensemble de mots en tableau avant de filtrer
    const frenchWordsArray = Array.from(this.frenchWords);
    // Filtrer la liste des mots pour ne retourner que ceux qui contiennent la syllabe
    const filteredWords = frenchWordsArray.filter(word => word.includes(syllable));
    // Retourner les mots filtrés sous forme d'observable
    return of(filteredWords);
  }
}
