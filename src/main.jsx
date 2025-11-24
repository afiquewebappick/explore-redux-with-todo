import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: TodoList,
      },
      {
        path: '/add',
        Component: AddTodo,
      },
      {
        path: '/update/:id',
        Component: UpdateTodo,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
