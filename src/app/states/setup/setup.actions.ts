import { Action } from '@ngrx/store';

enum Step {
    SETTINGS = 1,
    LOCATION = 2,
    RESTAURANT = 3,
    RESULT = 4,
    NONE = 0
}

export enum ActionTypes {
    setStep = '[Step Service] setStep'
}

export class setStep implements Action {
    readonly type = ActionTypes.setStep;

    constructor(public payload: { step: Step }) { }
}

export type Actions =
    | setStep