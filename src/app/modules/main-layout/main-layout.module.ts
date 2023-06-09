import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainComponent } from './main/main.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ImageModule } from 'primeng/image';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainNavbarComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    ImageModule
  ]
})
export class MainLayoutModule { }
