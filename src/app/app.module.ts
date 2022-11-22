import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front-page/components';
import { BannerComponent } from './front-page/components/banner/banner.component';
import { CurriculumComponent } from './front-page/components/curriculum/curriculum.component';
import { AboutMeComponent } from './front-page/components/about-me/about-me.component';
import { StudyProjectComponent } from './front-page/components/study-project/study-project.component';
import { ContactComponent } from './front-page/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    CurriculumComponent,
    AboutMeComponent,
    StudyProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
