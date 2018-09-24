import React from 'react';
import { isFunction } from 'lodash';
const SomeModule = require('./SomeModule');

const DefaultExportCheck = ({ value }) => {
  if (isFunction(value)) {
    return <p>✓ <code>add-module-exports</code> works: <SomeModule /></p>;
  }

  return <p>✘ <code>add-module-exports</code> does not work</p>;
};
const App = () => (
  <p className="App-intro">
    <DefaultExportCheck value={SomeModule} />
  </p>
);

export default App;
