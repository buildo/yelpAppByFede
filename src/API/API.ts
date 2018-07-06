import { IORestaurantsType } from 'model';

const API_KEY =
  'xUfPkqmnsgXsHa99dCh5Z4gi-EN4SoqkeMe9ynBuYk5gzjRiTKsZVpu-7q0M8jn0Ho1KGG2Iaf4MmSl8KxWmdDG6QUG8jqhugTD7jeFggJwZbvjZD7XGDTy9eu3gWnYx';

export const getRestaurants = (place: string, distance: string) =>
  !place
    ? Promise.resolve(IORestaurantsType.decode({ businesses: [] }))
    : fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=restaurants&location=${place ||
          500}&radius=${distance}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      )
        .then(res => res.json())
        .then(json => IORestaurantsType.decode(json));
