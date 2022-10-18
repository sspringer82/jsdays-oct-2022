import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';
import usePerson from './usePerson';

const List: React.FC = () => {
  const { persons, handleDelete } = usePerson();
  const navigate = useNavigate();

  function handleEdit(id: number) {
    navigate(`/edit/${id}`);
  }

  function handleNew() {
    navigate('/create');
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth date</th>
            <th>street</th>
            <th>city</th>
            <th>zip code</th>
          </tr>
        </thead>
        <tbody>
          {persons?.map((person) => (
            <ListItem
              key={person.id}
              person={person}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
      <button
        onClick={handleNew}
        style={{
          position: 'sticky',
          bottom: 20,
          left: '90%',
        }}
      >
        new
      </button>
    </>
  );
};

export default List;
