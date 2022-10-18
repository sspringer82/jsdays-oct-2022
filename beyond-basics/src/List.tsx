import React, { useState } from 'react';
import Form from './Form';
import ListItem from './ListItem';
import usePerson from './usePerson';

const List: React.FC = () => {
  const { persons, handleDelete, handleSave } = usePerson();

  const [form, setForm] = useState<{ edit: number | null; showForm: boolean }>({
    edit: null,
    showForm: false,
  });

  function handleEdit(id: number): void {
    setForm({ edit: id, showForm: true });
  }

  function clearAndHideForm(): void {
    setForm({ edit: null, showForm: false });
  }

  function handleNew(): void {
    setForm({ edit: null, showForm: true });
  }

  return (
    <>
      {form.showForm && (
        <Form
          id={form.edit}
          onSave={(person) => {
            handleSave(person);
            clearAndHideForm();
          }}
          onCancel={clearAndHideForm}
        />
      )}
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
