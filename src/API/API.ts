import { IORestaurantsType } from 'model';
import * as config from 'config';

export const getRestaurants = (place: string, distance: string) =>
  !place
    ? Promise.resolve(IORestaurantsType.decode({ businesses: [] }))
    : fetch(
        `${
          config.apiEndpoint
        }businesses/search?categories=restaurants&location=${place ||
          500}&radius=${distance}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${config.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      )
        .then(res => res.json())
        .then(json => IORestaurantsType.decode(json));
