import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CreateEquipeComponent } from './create-equipe/create-equipe.component';
import { EquipeDetailsComponent } from './equipe-details/equipe-details.component';
import { EquipeListComponent } from './equipe-list/equipe-list.component';
import { CreateEntraineurComponent } from './create-entraineur/create-entraineur.component';
import { EntraineurDetailsComponent } from './entraineur-details/entraineur-details.component';
import { EntraineurListComponent } from './entraineur-list/entraineur-list.component';
import { CreateJouerComponent } from './create-jouer/create-jouer.component';
import { JouerListComponent } from './jouer-list/jouer-list.component';
import { JouerDetailsComponent } from './jouer-details/jouer-details.component';
import { CreateJoueurComponent } from './create-joueur/create-joueur.component';
import { JoueurListComponent } from './joueur-list/joueur-list.component';
import { JoueurDetailsComponent } from './joueur-details/joueur-details.component';
import { CreateJourneeComponent } from './create-journee/create-journee.component';
import { JourneeListComponent } from './journee-list/journee-list.component';
import { JourneeDetailsComponent } from './journee-details/journee-details.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchListComponent } from './match-list/match-list.component';
import { CreateSaisonComponent } from './create-saison/create-saison.component';
import { SaisonListComponent } from './saison-list/saison-list.component';
import { SaisonDetailsComponent } from './saison-details/saison-details.component';
import { CreateStadeComponent } from './create-stade/create-stade.component';
import { StadeDetailsComponent } from './stade-details/stade-details.component';
import { StadeListComponent } from './stade-list/stade-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAdminComponent,
    AdminListComponent,
    AdminDetailsComponent,
    CreateEquipeComponent,
    EquipeDetailsComponent,
    EquipeListComponent,
    CreateEntraineurComponent,
    EntraineurDetailsComponent,
    EntraineurListComponent,
    CreateJouerComponent,
    JouerListComponent,
    JouerDetailsComponent,
    CreateJoueurComponent,
    JoueurListComponent,
    JoueurDetailsComponent,
    CreateJourneeComponent,
    JourneeListComponent,
    JourneeDetailsComponent,
    CreateMatchComponent,
    MatchDetailsComponent,
    MatchListComponent,
    CreateSaisonComponent,
    SaisonListComponent,
    SaisonDetailsComponent,
    CreateStadeComponent,
    StadeDetailsComponent,
    StadeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
