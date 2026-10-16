import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import {fullOffers, offers} from './mocks/offers';
import {favoriteOffers} from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      fullOffers={fullOffers}
      favoriteOffers={favoriteOffers}
    />
  </React.StrictMode>
);
