import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { MainBannerComponent } from './modules/main-banner/main-banner.component';
import { AccueilComponent } from './modules/accueil/accueil.component';
import { CarteComponent } from './modules/carte/carte.component';
import { BoutiqueComponent } from './modules/boutique/boutique.component';
import { EntrepriseComponent } from './modules/entreprise/entreprise.component';
import { JobsComponent } from './modules/jobs/jobs.component';
import { PhotosComponent } from './modules/photos/photos.component';
import { MainRoutingModule } from './modules/main/main-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainBannerComponent,
    AccueilComponent,
    CarteComponent,
    BoutiqueComponent,
    EntrepriseComponent,
    JobsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
