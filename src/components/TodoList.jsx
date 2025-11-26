import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '@/features/todos/todosSlice';
import { useNavigate } from 'react-router';

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(todos)

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">To Do List</h1>

      <div className="">
        <Table>
          {/* table header */}
          <TableHeader>
            <TableRow>
              <TableHead>Task Title</TableHead>
              <TableHead>Task Description</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          {/* table body */}
          <TableBody>
            {todos.length > 0 &&
              todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell className="font-medium">{todo.title}</TableCell>
                  <TableCell>{todo.description}</TableCell>
                  <TableCell className={'space-x-2'}>
                    {' '}
                    <Button
                      onClick={() => navigate(`/update/${todo.id}`)}
                      className={'bg-orange-300 cursor-pointer'}
                      size="sm"
                      variant="outline"
                    >
                      <FaEdit></FaEdit>
                      Edit
                    </Button>
                    <Button
                      className={'bg-red-400 cursor-pointer'}
                      onClick={() => handleDelete(todo.id)}
                      size="sm"
                      variant="outline"
                    >
                      <MdDelete></MdDelete>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TodoList;
