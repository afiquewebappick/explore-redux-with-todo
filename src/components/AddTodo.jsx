import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { Textarea } from './ui/textarea';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/features/todos/todosSlice';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const AddTodo = () => {
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTask = (data) => {
    // console.log(data);
    dispatch(addTodo(data));
    navigate('/');
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">{t('navbar.addTask')}</h1>

      <div className="max-w-md mt-6 mx-auto">
        <form onSubmit={handleSubmit(handleAddTask)}>
          <Label htmlFor="title">{t('taskTitle')}</Label>
          <Input
            className="mt-2 mb-4"
            {...register('title', { required: true })}
            type="text"
            id="title"
            placeholder="title"
          />

          <Label htmlFor="description">{t('taskDescription')}</Label>
          <Textarea
            className="mt-2"
            {...register('description', { required: true })}
            id="description"
            placeholder="Type your description here."
          />

          <Button className="mt-4" type="submit">
            {t('navbar.addTask')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
