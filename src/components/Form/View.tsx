import * as React from 'react';
import { injectIntl } from 'react-intl';
import debounce from 'lodash-es/debounce';
import Input from 'Input';
import Results from 'Results';

import './form.scss';

export type FetchFields = { placeToFetch: string; distanceToFetch: string };

export type FormFields = { place: string; distance: string };

export type FormPlaceholders = { [key in keyof FormFields]: string };

type State = { [key in keyof FormFields]: string } &
  { [key in keyof FetchFields]: string };

type Props = {} & ReactIntl.InjectedIntlProps;

const Placeholders: FormPlaceholders = {
  place: 'App.place.placeholder',
  distance: 'App.distance.placeholder',
};

class Form extends React.PureComponent<Props, State> {
  state: State = {
    place: '',
    distance: '',
    placeToFetch: '',
    distanceToFetch: '',
  };

  changeResultsToFetch = (inputName: keyof FetchFields) =>
    debounce(
      (value: string) => this.setState({ [inputName]: value } as State),
      500,
    );

  changeDistanceToFetch = this.changeResultsToFetch('distanceToFetch');

  changePlaceToFetch = this.changeResultsToFetch('placeToFetch');

  changeFieldValue = (
    inputName: keyof FormFields,
  ): ((value: string) => void) => value =>
    this.setState(({
      [inputName]: value,
    } as any) as State);

  onChangeDistance = (value: string) => {
    this.changeFieldValue('distance')(value);
    this.changeDistanceToFetch(value);
  };

  onChangePlace = (value: string) =>
    this.changeFieldValue('place')(value) || this.changePlaceToFetch(value);

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const { place, distance, placeToFetch, distanceToFetch } = this.state;

    return (
      <form className="ui form">
        <Input
          onChange={this.onChangePlace}
          placeholder={formatMessage({ id: Placeholders.place })}
          value={place}
        />

        <Input
          onChange={this.onChangeDistance}
          placeholder={formatMessage({ id: Placeholders.distance })}
          type="number"
          value={distance}
        />

        <Results distance={distanceToFetch} place={placeToFetch} />
      </form>
    );
  }
}

export default injectIntl<{}>(Form);
