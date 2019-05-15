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

export const initialState = {
    location: {},
    restaurants: [],
    selectedRestaurant: {}
};

export function counterReducer(state = initialState, action: Actions) {
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

        default:
            return state;
    }
}