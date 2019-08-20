import { BuildEffects } from './store/effects/build.effects';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuildEditorComponent } from './shared/build-editor/build-editor.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ActiveBuildSelectComponent } from './shared/active-build-select/active-build-select.component';
import { BuildEvaluationResultComponent } from './shared/build-evaluation-result/build-evaluation-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CalculatorViewComponent,
    BuffTimerViewComponent,
    HomeViewComponent,
    CheatSheetViewComponent,
    BuildEditorComponent,
    ActiveBuildSelectComponent,
    BuildEvaluationResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([BuildEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
