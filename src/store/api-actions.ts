import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const';
import {OfferPreview} from '../types/offer';
import {AppDispatch, State} from '../types/state';
import {fillOffers, setOffersLoadingStatus} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));

    try {
      const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
      dispatch(fillOffers(data));
    } finally {
      dispatch(setOffersLoadingStatus(false));
    }
  },
);
