import { Action } from '@ngrx/store';
import { ActionTypes, Actions } from './location.actions';

interface ILocation {
    lat: number;
    lng: number;
}

interface IRestaurants {
    geometry: ILocation;
    icon: string;
    name: string;
    isOpen: boolean;
    address: string;
}

export enum ELocationAccess {
    AWAIT = 0,
    GRANTED = 1,
    DENIED = 2
}

export interface LocationState {
    location: object;
    restaurants: object[];
    selectedRestaurant: object;
    locationAccess: ELocationAccess;
}

export const initialState: LocationState = {
    location: {},
    restaurants: [],
    selectedRestaurant: {},
    locationAccess: ELocationAccess.AWAIT
};

export function reducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.setRestaurants: {
            state.restaurants.push(action.payload.restaurants);
            return state;
        }
        case ActionTypes.setSelectedRestaurant: {
            state.selectedRestaurant = action.payload.restaurant;
            return state;
        }
        case ActionTypes.setCurrentLocation: {
            state.location = action.payload.location
            return state
        }
        case ActionTypes.setLocationAccess: {
            state.locationAccess = action.payload.access
            return state
        }

        default:
            return state;
    }
}