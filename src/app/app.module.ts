import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyllableComponent } from './syllable/syllable.component';
import { UserInputComponent } from './user-input/user-input.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ScoreComponent } from './score/score.component';
import { PossibleWordsComponent } from './possible-words/possible-words.component';

@NgModule({
  declarations: [
    AppComponent,
    SyllableComponent,
    UserInputComponent,
    HeaderComponent,
    MainMenuComponent,
    CountdownComponent,
    ScoreComponent,
    PossibleWordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
