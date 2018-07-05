import * as React from 'react';
import { FormFields, FormPlaceHolders } from 'model';
import { FormattedMessage, injectIntl } from 'react-intl';
import Input from '@buildo/bento/components/Input';
import View from 'View';

import './form.scss';
import '@buildo/bento/components/Input.scss';

type AppState = { [key in FormFields]: string };

type AppProps = {};

const Placeholders: FormPlaceHolders = {
  place: 'App.place.placeholder',
  distance: 'App.distance.placeholder',
};

class Form extends React.PureComponent<
  AppProps & ReactIntl.InjectedIntlProps,
  AppState
> {
  state: AppState = {
    place: '',
    distance: '',
  };

  onChange = (inputName: FormFields): ((value: string) => void) => value =>
    this.setState({
      [inputName]: value,
    } as AppState);

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const { place, distance } = this.state;

    return (
      <form className="ui form">
        <View className="title" hAlignContent="center">
          <FormattedMessage id="App.title" />
        </View>

        <View className="lead" hAlignContent="center">
          <FormattedMessage id="App.subtitle" />
        </View>

        <Input
          onChange={this.onChange('place')}
          placeholder={formatMessage({ id: Placeholders.place })}
          value={place}
        />

        <Input
          onChange={this.onChange('distance')}
          placeholder={formatMessage({ id: Placeholders.distance })}
          value={distance}
        />
      </form>
    );
  }
}

export default injectIntl<AppProps>(Form);
