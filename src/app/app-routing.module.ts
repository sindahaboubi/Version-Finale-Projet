import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { AdminComponent } from './pages/formulaire/admin/admin.component';
import { ConnexionComponent } from './pages/formulaire/connexion/connexion.component';
import { CreerComponent } from './pages/formulaire/creer/creer.component';
import { DetailsHotelsComponent } from './pages/hotels/details-hotels/details-hotels.component';
import { HotelsComponent } from './pages/hotels/hotels.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'a propos',component:AProposComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminComponent},
  {path:'creer',component:CreerComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'hotels/:id', component:DetailsHotelsComponent},
  {path:'accueil/:id', component:HotelsComponent},
  {path:'**',component:ErreurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
