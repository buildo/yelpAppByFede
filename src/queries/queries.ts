import { Query } from '@buildo/bento/data';
import * as API from 'API';
import * as t from 'io-ts';

export const restaurants = Query({
  params: { place: t.string, distance: t.string },
  fetch: ({ place, distance }) => API.getRestaurants(place, distance),
});

export default undefined;
