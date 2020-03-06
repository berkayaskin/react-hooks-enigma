import React from 'react';
import { QDocProvider } from './QDoc';
import SomeConsumer from './SomeConsumer';

const App = () => (
  <>
    <QDocProvider>
      <SomeConsumer />
    </QDocProvider>
  </>
);

App.propTypes = {};

export default App;
