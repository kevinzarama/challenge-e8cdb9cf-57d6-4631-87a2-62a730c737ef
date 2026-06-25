import React from 'react';
import Button from '../components/Button.tsx';
import { useAppContext } from '../hooks/useAppContext.tsx';
import { useAppStore } from '../store/store.js';

const Home: React.FC = () => {
  const { count, increment } = useAppContext();
  const user = useAppStore((state: { user: any; }) => state.user);
  const setUser = useAppStore((state: { setUser: any; }) => state.setUser);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
      
      <p>Count: {user}</p>
      <Button onClick={()=>setUser("new user")}>Reset</Button>
    </div>
  );
};

export default Home;