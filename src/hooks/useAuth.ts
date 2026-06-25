import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
}

export const useAuth = (): AuthState => {
  const [authState, setAuthState] = useState<AuthState>({ isAuthenticated: false });

  useEffect(() => {
    // Simulate authentication check
    setTimeout(() => {
      setAuthState({ isAuthenticated: true });
    }, 1000);
  }, []);

  return authState;
};