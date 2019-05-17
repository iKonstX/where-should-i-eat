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

export enum ERestaurants {
    AWAIT = 0,
    FOUND = 1,
    NOTFOUND = 2
}

export interface LocationState {
    location: object;
    filters: object;
    restaurants: object[];
    selectedRestaurant: object;
    locationAccess: ELocationAccess;
    restaurantResult: ERestaurants;
}

export const initialState: LocationState = {
    location: {},
    filters: { radius: 1 },
    restaurants: [],
    selectedRestaurant: {},
    locationAccess: ELocationAccess.AWAIT,
    restaurantResult: ERestaurants.AWAIT
};

export function reducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.setRestaurants: {
            state.restaurants.push(action.payload.restaurants);
            return state;
        }
        case ActionTypes.setFilter: {
            Object.assign(state.filters, action.payload.filter);
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
        case ActionTypes.setRestaurantResult: {
            state.restaurantResult = action.payload.result
            return state
        }

        default:
            return state;
    }
}