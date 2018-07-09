import * as t from 'io-ts';

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

export type IRestaurant = t.TypeOf<typeof IORestaurantType>;

export const IORestaurantsType = t.interface({
  businesses: t.array(IORestaurantType),
});

export default undefined;
