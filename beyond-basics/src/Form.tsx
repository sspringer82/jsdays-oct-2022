import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { InputPerson } from './Person';
import usePerson from './usePerson';
import { ErrorMessage } from '@hookform/error-message';

const initialPerson: InputPerson = {
  firstName: '',
  lastName: '',
  birthdate: '',
  street: '',
  city: '',
  zipCode: '',
};

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { handleSave } = usePerson();
  const { id } = useParams<{ id: string }>();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<InputPerson>();

  function handleCancel() {
    reset(initialPerson);
    navigate('/');
  }

  useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
        .then((response) => response.json())
        .then((data) => reset(data));
    }
  }, [id, reset]);

  function onSubmit(person: InputPerson) {
    handleSave(person);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        first name:{' '}
        <input
          type="text"
          {...register('firstName', {
            required: 'required, you fool',
            minLength: 2,
            maxLength: 20,
          })}
        />{' '}
      </label>
      <ErrorMessage errors={errors} name="firstName" />
      <label>
        last name:{' '}
        <input
          type="text"
          {...register('lastName', {
            required: true,
            minLength: 2,
            maxLength: 20,
          })}
        />{' '}
      </label>
      <label>
        birth date: <input type="text" {...register('birthdate')} />{' '}
      </label>
      <label>
        street: <input type="text" {...register('street')} />{' '}
      </label>
      <label>
        city: <input type="text" {...register('city')} />{' '}
      </label>
      <label>
        zip code: <input type="text" {...register('zipCode')} />{' '}
      </label>
      <button type="submit">save</button>
      <button type="reset" onClick={handleCancel}>
        cancel
      </button>
    </form>
  );
};

export default Form;
