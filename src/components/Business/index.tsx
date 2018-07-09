import * as React from 'react';
import { IRestaurant } from 'model';
import View from 'View';

import './business.scss';

const Business: React.SFC<IRestaurant> = ({
  display_phone,
  image_url,
  name,
  rating,
  phone,
  price,
  url,
}) => (
  <View column className="business" shrink={0}>
    <div className="name">{name}</div>

    <View>
      <a href={url} target="_blank">
        <img src={image_url} />
      </a>

      <View column grow={1} hAlignContent="center" vAlignContent="center">
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
