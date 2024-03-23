import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  countdown: number = 0;
  private countdownSubscription!: Subscription;

  constructor(private countdownService: CountdownService) {}

  ngOnInit() {
    this.countdownSubscription = this.countdownService.countdown$.subscribe(time => {
      this.countdown = time;
    });
  }

  ngOnDestroy() {
    this.countdownSubscription.unsubscribe();
  }
}
