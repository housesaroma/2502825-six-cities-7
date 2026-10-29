import {MutableRefObject, useEffect, useState} from 'react';
import leaflet, {Map} from 'leaflet';

const TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const instance = leaflet.map(mapRef.current);
    leaflet.tileLayer(TILE_URL, {attribution: TILE_ATTRIBUTION}).addTo(instance);
    setMap(instance);

    return () => {
      instance.remove();
    };
  }, [mapRef]);

  return map;
}

export default useMap;
