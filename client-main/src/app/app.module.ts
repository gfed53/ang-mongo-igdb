import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { SearchComponent } from './search/search.component';

// Services
import { TodoService } from './services/todo.service';
import { SearchService } from './services/search.service';
import { GetPlatformsService } from './services/get-platforms.service';


import { HeaderComponent } from './header/header.component';
import { SingleGameComponent } from './single-game/single-game.component';
import { SingleSearchComponent } from './single-search/single-search.component';
import { SingleSearchControlsComponent } from './single-search-controls/single-search-controls.component';
import { SingleResultComponent } from './single-result/single-result.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SearchComponent,
    HeaderComponent,
    SingleGameComponent,
    SingleSearchComponent,
    SingleSearchControlsComponent,
    SingleResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService, SearchService, GetPlatformsService],
  bootstrap: [AppComponent]
})
export class AppModule { }