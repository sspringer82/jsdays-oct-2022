import React from 'react';
import Person from './Person';

type Params = {
  person: Person;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const ListItem: React.FC<Params> = ({ person, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.birthdate}</td>
      <td>{person.street}</td>
      <td>{person.city}</td>
      <td>{person.zipCode}</td>
      <td>
        <button onClick={() => onDelete(person.id)}>delete</button>
      </td>
      <td>
        <button onClick={() => onEdit(person.id)}>edit</button>
      </td>
    </tr>
  );
};

export default ListItem;
