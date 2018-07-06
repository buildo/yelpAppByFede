import * as t from 'io-ts';
import * as React from 'react';
import { IORestaurantType } from 'model';
import View from 'View';

import './business.scss';

type IRestaurant = t.TypeOf<typeof IORestaurantType>;

const Business: React.SFC<IRestaurant> = ({
  display_phone,
  image_url,
  name,
  rating,
  phone,
  price,
  url,
}) => (
  <View column className="business">
    <div className="name">{name}</div>

    <View>
      <a href={url} target="_blank">
        <img src={image_url} />
      </a>

      <View className="internal_wrapper">
        <a className="phone" href={`tel:${phone}`}>
          {display_phone}
        </a>

        <div className="price">
          {rating} / {price}
        </div>
      </View>
    </View>
  </View>
);

export default Business;
