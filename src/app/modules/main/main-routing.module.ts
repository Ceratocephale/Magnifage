import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from 'src/app/shared/banner/banner.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { CarteComponent } from '../carte/carte.component';
import { EntrepriseComponent } from '../entreprise/entreprise.component';
import { JobsComponent } from '../jobs/jobs.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { PhotosComponent } from '../photos/photos.component';

const routes: Routes = [
  {path : '', component : BannerComponent, children : [
    {path : 'accueil', component : AccueilComponent},
    {path : 'main-banner', component : MainBannerComponent},
    {path : 'carte', component : CarteComponent},
    {path : 'boutique', component : BoutiqueComponent},
    {path : 'entreprise', component : EntrepriseComponent},
    {path : 'jobs', component : JobsComponent},
    {path : 'photos', component : PhotosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
