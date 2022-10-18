import React from 'react';
import List from './List';
import { PersonProvider } from './PersonProvider';

const App: React.FC = () => {
  return (
    <PersonProvider>
      <List />
    </PersonProvider>
  );
};

export default App;
