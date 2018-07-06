import * as t from 'io-ts';

export type FetchFields = { placeToFetch: string; distanceToFetch: string };

export type FormFields = { place: string; distance: string };

export type FormPlaceholders = { [key in keyof FormFields]: string };

export const IORestaurantType = t.interface({
  id: t.string,
  display_phone: t.string,
  name: t.string,
  image_url: t.string,
  rating: t.number,
  phone: t.string,
  price: t.string,
  url: t.string,
});

export const IORestaurantsType = t.interface({
  businesses: t.array(IORestaurantType),
});

export default undefined;
