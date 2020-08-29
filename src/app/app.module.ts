import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { tutorialReducer } from './reducers/tutorial.reducer';

@NgModule({
  declarations: [AppComponent, ReadComponent, CreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tutorial: tutorialReducer }),
    /* StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }), */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
