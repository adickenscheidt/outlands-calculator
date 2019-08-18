import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CalculatorViewComponent } from './views/calculator-view/calculator-view.component';
import { BuffTimerViewComponent } from './views/buff-timer-view/buff-timer-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { CheatSheetViewComponent } from './views/cheat-sheet-view/cheat-sheet-view.component';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BuildEditorComponent } from './shared/build-editor/build-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CalculatorViewComponent,
    BuffTimerViewComponent,
    HomeViewComponent,
    CheatSheetViewComponent,
    BuildEditorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
