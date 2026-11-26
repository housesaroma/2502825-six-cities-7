import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, CityName, DEFAULT_CITY} from '../const';
import {OfferPreview} from '../types/offer';
import {AuthInfo} from '../types/user';
import {changeCity, fillOffers, requireAuthorization, setOffersLoadingStatus, setUser} from './action';

type InitialState = {
  city: CityName;
  offers: OfferPreview[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
