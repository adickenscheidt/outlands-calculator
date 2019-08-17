import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CalculatorViewComponent } from './views/calculator-view/calculator-view.component';
import { BuffTimerViewComponent } from './views/buff-timer-view/buff-timer-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { CheatSheetViewComponent } from './views/cheat-sheet-view/cheat-sheet-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CalculatorViewComponent,
    BuffTimerViewComponent,
    HomeViewComponent,
    CheatSheetViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
