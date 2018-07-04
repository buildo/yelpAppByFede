/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from 'react';
import View from 'View';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <View
        className="app"
        column
        hAlignContent="center"
        vAlignContent="center"
      >
        <h1>Bento App</h1>
      </View>
    );
  }
}

export default App;
