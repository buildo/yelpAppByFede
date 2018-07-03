/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from 'react';

import './app.scss';

class App extends React.Component<never> {
  render() {
    return (
      <div className='app'>
        <h1>Bento App</h1>
      </div>
    );
  }
}

export default App;
