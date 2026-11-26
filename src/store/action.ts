import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, CityName} from '../const';
import {OfferPreview} from '../types/offer';
import {AuthInfo} from '../types/user';

export const changeCity = createAction<CityName>('city/change');

export const fillOffers = createAction<OfferPreview[]>('offers/fill');

export const setOffersLoadingStatus = createAction<boolean>('offers/setLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUser = createAction<AuthInfo | null>('user/setUser');
