import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreService } from '../score.service';
import {FrenchDictionaryService} from "../french-dictionary.service";
import { SyllableService} from "../syllable.service";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnDestroy {
  score: number = 0;
  private scoreSubscription!: Subscription;

  constructor(private scoreService: ScoreService,
  ) {}

  ngOnInit() {
    this.scoreSubscription = this.scoreService.score$.subscribe((value : number) => {
      this.score = value;
    });
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
}
