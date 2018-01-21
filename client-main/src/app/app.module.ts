// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Services
import { SingleSearchService } from './services/single-search.service';
import { RelatedSearchService } from './services/related-search.service';
import { GetPlatformsService } from './services/get-platforms.service';
import { GetGenresService } from './services/get-genres.service';
import { UtilitiesService } from './services/utilities.service';
import { SingleGameService } from './services/single-game.service';
import { RelatedGamesService } from './services/related-games.service';
import { ModalService } from './services/modal.service';

// Directives

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingleGameComponent } from './single-game/single-game.component';
import { SingleSearchComponent } from './single-search/single-search.component';
import { SingleSearchControlsComponent } from './single-search-controls/single-search-controls.component';
import { SingleResultComponent } from './single-result/single-result.component';
import { RelatedSearchControlsComponent } from './related-search-controls/related-search-controls.component';
import { RelatedSearchComponent } from './related-search/related-search.component';
import { RelatedResultsComponent } from './related-results/related-results.component';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleGameComponent,
    SingleSearchComponent,
    SingleSearchControlsComponent,
    SingleResultComponent,
    RelatedSearchControlsComponent,
    RelatedSearchComponent,
    RelatedResultsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2PageScrollModule
  ],
  providers: [ 
    SingleSearchService,
    RelatedSearchService,
    SingleGameService,
    RelatedGamesService,
    GetPlatformsService,
    GetGenresService,
    UtilitiesService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
