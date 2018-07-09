/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import View from 'View';
import Form from 'Form';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <View className="app" column basis="100%" hAlignContent="center">
        <View className="title" shrink={0} hAlignContent="center">
          <FormattedMessage id="App.title" />
        </View>

        <View className="lead" shrink={0} hAlignContent="center">
          <FormattedMessage id="App.subtitle" />
        </View>

        <Form />
      </View>
    );
  }
}

export default App;
