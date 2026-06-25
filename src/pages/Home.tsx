import React from 'react';
import Button from '../components/Button.tsx';
import { useAppContext } from '../hooks/useAppContext.tsx';

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