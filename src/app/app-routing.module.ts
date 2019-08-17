import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CalculatorViewComponent } from './views/calculator-view/calculator-view.component';
import { BuffTimerViewComponent } from './views/buff-timer-view/buff-timer-view.component';
import { CheatSheetViewComponent } from './views/cheat-sheet-view/cheat-sheet-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeViewComponent },
      { path: 'calculator', component: CalculatorViewComponent },
      { path: 'buff-timers', component: BuffTimerViewComponent },
      { path: 'cheat-sheet', component: CheatSheetViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
