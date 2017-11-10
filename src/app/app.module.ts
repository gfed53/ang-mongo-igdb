import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { VideoSearchComponent } from './video-search/video-search.component';
import { SearchComponent } from './search/search.component';

// Services
import { TodoService } from './services/todo.service';
import { SearchService } from './services/search.service';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
