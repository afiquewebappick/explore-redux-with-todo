import { Outlet } from 'react-router';
import './App.css';
import AddUpdateTodo from './components/AddTodo';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
