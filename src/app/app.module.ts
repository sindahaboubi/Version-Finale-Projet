import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { NavComponent } from './navFooter/nav/nav.component';
import { FooterComponent } from './navFooter/footer/footer.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DetailsHotelsComponent } from './pages/hotels/details-hotels/details-hotels.component';
import { LocalPipe } from './local.pipe';
import { ConnexionComponent } from './pages/formulaire/connexion/connexion.component';
import { CreerComponent } from './pages/formulaire/creer/creer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipementsComponent } from './pages/hotels/details-hotels/equipements/equipements.component';
import { KmPipe } from './km.pipe';
import { FormTarifsComponent } from './pages/formulaire/form-tarifs/form-tarifs.component';
import { AdminComponent } from './pages/formulaire/admin/admin.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonnePipe } from './personne.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    NavComponent,
    FooterComponent,
    AProposComponent,
    ContactComponent,
    ErreurComponent,
    AccueilComponent,
    DetailsHotelsComponent,
    LocalPipe,
    ConnexionComponent,
    CreerComponent,
    EquipementsComponent,
    KmPipe,
    FormTarifsComponent,
    AdminComponent,
    PersonnePipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
