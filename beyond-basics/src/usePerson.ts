import { useState, useEffect } from 'react';
import Person, { InputPerson } from './Person';

const url = `${process.env.REACT_APP_BACKEND_URL}/users`;

type ReturnValue = {
  persons: Person[];
  handleDelete: (id: number) => void;
  handleSave: (person: InputPerson) => void;
};

export default function usePerson(): ReturnValue {
  const [persons, setPersons] = useState<Person[]>([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  function handleDelete(id: number): void {
    fetch(`${url}/${id}`, { method: 'DELETE' }).then((response) => {
      setPersons((prevPersons) =>
        prevPersons?.filter((person) => person.id !== id)
      );
    });
  }

  function handleSave(person: InputPerson) {
    const method = person.id ? 'PUT' : 'POST';
    let saveUrl = person.id ? `${url}/${person.id}` : url;
    fetch(saveUrl, {
      method,
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setPersons((prevPersons) => {
          if (person.id) {
            return prevPersons.map((prevPerson) => {
              if (prevPerson.id === person.id) {
                return person;
              }
              return prevPerson;
            });
          }
          return [...prevPersons, data];
        });
      });
  }

  return {
    persons,
    handleDelete,
    handleSave,
  };
}
