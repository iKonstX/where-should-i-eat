import { Action } from '@ngrx/store';

export enum ActionTypes {
    setRestaurants = '[Counter Component] setRestaurants',
    setCurrentLocation = '[Counter Component] setCurrentLocation',
    Reset = '[Counter Component] Reset',
}

export class setRestaurants implements Action {
    readonly type = ActionTypes.setRestaurants;

    constructor(public payload: { restaurants: any }) { }
}

export class setCurrentLocation implements Action {
    readonly type = ActionTypes.setCurrentLocation;

    constructor(public payload: { location: any }) { }
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}

export type Actions =
    | setRestaurants
    | setCurrentLocation