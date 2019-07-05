import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';




@NgModule({
  declarations: [
    HeaderComponent,
SidebarComponent,
BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
   
   
  ], 
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],

  providers: [],
  bootstrap: []
})
export class sharedModule { }
