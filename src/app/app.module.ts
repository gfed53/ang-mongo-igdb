// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, NgModel, Validators } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NouisliderModule } from 'ng2-nouislider';
import { NgInviewModule } from 'angular-inport';

// Services
import { SingleSearchService } from './services/single-search.service';
import { RelatedSearchService } from './services/related-search.service';
import { GetPlatformsService } from './services/get-platforms.service';
import { GetGenresService } from './services/get-genres.service';
import { UtilitiesService } from './services/utilities.service';
import { SingleGameService } from './services/single-game.service';
import { RelatedGamesService } from './services/related-games.service';
import { ModalService } from './services/modal.service';
import { SmoothScrollService } from './services/smooth-scroll.service';

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
import { DateFilterComponent } from './date-filter/date-filter.component';
import { LoaderComponent } from './loader/loader.component';




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
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    Ng2PageScrollModule,
    LazyLoadImageModule,
    NouisliderModule,
    NgInviewModule
  ],
  providers: [ 
    SingleSearchService,
    RelatedSearchService,
    SingleGameService,
    RelatedGamesService,
    GetPlatformsService,
    GetGenresService,
    UtilitiesService,
    ModalService,
    SmoothScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
