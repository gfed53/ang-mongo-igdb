import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { TodoService } from './services/todo.service';
import { SingleSearchService } from './services/single-search.service';
import { GetPlatformsService } from './services/get-platforms.service';
import { GetGenresService } from './services/get-genres.service';
import { UtilitiesService } from './services/utilities.service';
import { SingleGameService } from './services/single-game.service';

// Components
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
// import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { SingleGameComponent } from './single-game/single-game.component';
import { SingleSearchComponent } from './single-search/single-search.component';
import { SingleSearchControlsComponent } from './single-search-controls/single-search-controls.component';
import { SingleResultComponent } from './single-result/single-result.component';
import { RelatedSearchControlsComponent } from './related-search-controls/related-search-controls.component';
import { RelatedSearchComponent } from './related-search/related-search.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    // SearchComponent,
    HeaderComponent,
    SingleGameComponent,
    SingleSearchComponent,
    SingleSearchControlsComponent,
    SingleResultComponent,
    RelatedSearchControlsComponent,
    RelatedSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService, 
    SingleSearchService,
    SingleGameService,
    GetPlatformsService,
    GetGenresService,
    UtilitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
