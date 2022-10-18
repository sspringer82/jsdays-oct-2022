# Aufgabe 2 - Context

Lagere das Statemanagement in einen eigenen Context aus und binde ihn in den Custom Hook ein.

## Wie gehe ich vor?

- erzeuge einen `PersonContextType`, der den State modelliert

```
type PersonContextType = [
  Person[],
  React.Dispatch<React.SetStateAction<Person[]>>
];
```

- erzeuge einen Context `PersonContext` mit `createContext`
- erzeuge eine neue Komponente `PersonProvider` mit einem eigenen State, den du über den `PersonContext.Provider` zur Verfügung stellst.
- erzeuge einen Custom Hook `usePersonContext`, mit dem du über `useContext` auf den Kontext zugreifst und den Wert verfügbar machst.
- Integriere den PersonProvider in die App-Komponente
- Nutze die `usePersonContext` in `usePerson` statt dem bisherigen `useState`
