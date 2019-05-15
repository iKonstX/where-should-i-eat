import { Action } from '@ngrx/store';

export enum ActionTypes {
    setRestaurants = '[Location Service] setRestaurants',
    setCurrentLocation = '[Location Service] setCurrentLocation',
    setSelectedRestaurant = '[Location Service] setSelectedRestaurant',
}

export class setRestaurants implements Action {
    readonly type = ActionTypes.setRestaurants;

    constructor(public payload: { restaurants: any }) { }
}

export class setCurrentLocation implements Action {
    readonly type = ActionTypes.setCurrentLocation;

    constructor(public payload: { location: any }) { }
}

export class setSelectedRestaurant implements Action {
    readonly type = ActionTypes.setSelectedRestaurant;

    constructor(public payload: { restaurant: any }) { }
}

export type Actions =
    | setRestaurants
    | setCurrentLocation
    | setSelectedRestaurant