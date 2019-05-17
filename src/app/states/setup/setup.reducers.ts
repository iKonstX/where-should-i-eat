import { Action } from '@ngrx/store';
import { ActionTypes, Actions } from './setup.actions';

enum Step {
    SETTINGS = 1,
    LOCATION = 2,
    RESTAURANT = 3,
    RESULT = 4,
    NONE = 0
}

export interface SetupState {
    currentStep: Step;
    isLoading: boolean;
    loadingString: string;
}

export const initialState: SetupState = {
    currentStep: Step.NONE,
    isLoading: false,
    loadingString: ""
};

export function reducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.setStep: {
            state.currentStep = action.payload.step;
            return state;
        }
        default:
            return state;
    }
}