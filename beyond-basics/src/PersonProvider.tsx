import { createContext, useContext, useState } from 'react';
import Person from './Person';

type PersonContextType = [
  Person[],
  React.Dispatch<React.SetStateAction<Person[]>>
];

const PersonContext = createContext<PersonContextType | null>(null);

const PersonProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const stateValue = useState<Person[]>([]);
  return (
    <PersonContext.Provider value={stateValue}>
      {children}
    </PersonContext.Provider>
  );
};

function usePersonContext() {
  const personContextValue = useContext(PersonContext);
  if (personContextValue === null) {
    throw new Error('Use this function within a Provider');
  }
  return personContextValue;
}

export { PersonProvider, usePersonContext };
