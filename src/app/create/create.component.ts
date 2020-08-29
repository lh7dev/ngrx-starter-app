import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {
    const id = Math.floor(Math.random()*9999999999);
    this.store.dispatch(new TutorialActions.AddTutorial({ id, name, url }));
  }

  ngOnInit(): void {}
}
