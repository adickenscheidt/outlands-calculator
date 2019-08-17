import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTableModule, MatToolbarModule, MatSidenavModule, MatListModule],
  exports: [MatTableModule, MatToolbarModule, MatSidenavModule, MatListModule]
})
export class MaterialModule {}
