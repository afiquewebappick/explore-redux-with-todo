import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { Textarea } from './ui/textarea';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '@/features/todos/todosSlice';

const UpdateTodo = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    const existingTodo = todos.find((t) => t.id === id);
    setTodo(existingTodo);
  }, [id, todos]);

  const handleUpdateTask = (data) => {
    console.log(data);
    dispatch(updateTodo({ id, ...data }));
    navigate('/');
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Update Task</h1>

      <div className="max-w-md mt-6 mx-auto">
        <form onSubmit={handleSubmit(handleUpdateTask)}>
          <Label htmlFor="title">Task Title</Label>
          <Input
            className="mt-2 mb-4"
            {...register('title', { required: true })}
            type="text"
            id="title"
            placeholder="title"
            defaultValue={todo.title}
          />

          <Label htmlFor="description">Task Description</Label>
          <Textarea
            className="mt-2"
            {...register('description', { required: true })}
            id="description"
            placeholder="Type your description here."
            defaultValue={todo.description}
          />

          <Button className="mt-4" type="submit">
            Update Task
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodo;
