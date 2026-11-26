import {createReducer} from '@reduxjs/toolkit';
import {CityName, DEFAULT_CITY} from '../const';
import {OfferPreview} from '../types/offer';
import {changeCity, fillOffers, setOffersLoadingStatus} from './action';

type InitialState = {
  city: CityName;
  offers: OfferPreview[];
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  isOffersLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});
