import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {OfferPreview} from '../../types/offer';

type OffersListProps = {
  offers: OfferPreview[];
};

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<OfferPreview['id'] | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
