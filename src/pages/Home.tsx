import React from 'react';
import Button from '../components/Button';
import { useAppContext } from '../contexts/AppContext';

const Home: React.FC = () => {
  const { count, increment } = useAppContext();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default Home;