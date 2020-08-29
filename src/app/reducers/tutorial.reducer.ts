import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState = {
  name: 'First Tutorial',
  url: 'https://google.com',
  id: 1,
};

export function tutorialReducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      console.log(action.payload);
      return state.filter((el) => el.id != action.payload);
    //state.splice(action.payload, 1);

    default:
      return state;
  }
}
