import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { SidebarFormComponent } from './sidebar-form/sidebar-form.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { FooterFormComponent } from './footer-form/footer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuFormComponent,
    SidebarFormComponent,
    ContentFormComponent,
    FooterFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
