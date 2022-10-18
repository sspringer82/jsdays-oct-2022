import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { InputPerson } from './Person';

const initialPerson: InputPerson = {
  firstName: '',
  lastName: '',
  birthdate: '',
  street: '',
  city: '',
  zipCode: '',
};

type Props = {
  id?: number | null;
  onSave: (person: InputPerson) => void;
  onCancel: () => void;
};

const Form: React.FC<Props> = ({ id, onSave, onCancel }) => {
  const [person, setPerson] = useState<InputPerson>(initialPerson);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
        .then((response) => response.json())
        .then((data) => setPerson(data));
    }
  }, [id]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(person);
    setPerson(initialPerson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        first name:{' '}
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={person.firstName}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        last name:{' '}
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={person.lastName}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        birth date:{' '}
        <input
          type="text"
          name="birthdate"
          id="birthdate"
          value={person.birthdate}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        street:{' '}
        <input
          type="text"
          name="street"
          id="street"
          value={person.street}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        city:{' '}
        <input
          type="text"
          name="city"
          id="city"
          value={person.city}
          onChange={handleChange}
        />{' '}
      </label>
      <label>
        zip code:{' '}
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          value={person.zipCode}
          onChange={handleChange}
        />{' '}
      </label>
      <button type="submit">save</button>
      <button type="reset" onClick={onCancel}>
        cancel
      </button>
    </form>
  );
};

export default Form;
