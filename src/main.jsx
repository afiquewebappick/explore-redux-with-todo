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
import Home from './components/Home';
import "./i18n";
import Cart from './components/languageTest/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/todoList',
        Component: TodoList,
      },
      {
        path: '/add',
        Component: AddTodo,
      },
      {
        path: '/test',
        Component: Cart,
      },
      {
        path: '/update/:id',
        Component: UpdateTodo,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
