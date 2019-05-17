import { Action } from '@ngrx/store';
import { ELocationAccess } from './location.reducers';

export enum ActionTypes {
    setRestaurants = '[Location Service] setRestaurants',
    setCurrentLocation = '[Location Service] setCurrentLocation',
    setSelectedRestaurant = '[Location Service] setSelectedRestaurant',
    setLocationAccess = '[Location Service] setLocationAccess'
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

export class setLocationAccess implements Action {
    readonly type = ActionTypes.setLocationAccess;

    constructor(public payload: { access: locationAccess }) { }
}

export type Actions =
    | setRestaurants
    | setCurrentLocation
    | setSelectedRestaurant
    | setLocationAccess