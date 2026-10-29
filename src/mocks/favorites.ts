import {OfferPreview} from '../types/offer';
import {amsterdam} from './offers';

export const favoriteOffers: OfferPreview[] = [
  {
    id: '263b85d6-ae18-458b-852d-2b30db99d11a',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 237,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    city: amsterdam,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16},
    isFavorite: true,
    isPremium: true,
    rating: 4.3,
  },
  {
    id: '2cc1fa26-4cac-408b-a080-0baa92ca8335',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 222,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: amsterdam,
    location: {latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16},
    isFavorite: true,
    isPremium: true,
    rating: 4,
  },
];
