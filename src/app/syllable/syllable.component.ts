
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SyllableService } from '../syllable.service';

@Component({
  selector: 'app-syllable',
  templateUrl: './syllable.component.html',
  styleUrls: ['./syllable.component.css']
})
export class SyllableComponent implements OnInit, OnDestroy {
  syllable: string = "";
  private syllableSubscription: Subscription = new Subscription();

  constructor(private syllableService: SyllableService) {}

  ngOnInit() {


    this.syllableSubscription = this.syllableService.currentSyllable$.subscribe((syllable: string) => {
      this.syllable = syllable;
    });


  }

  ngOnDestroy() {
    this.syllableSubscription.unsubscribe();
  }
}
