import { create } from 'zustand';

export interface UserPayload {
  uid: string;
  name: string;
  email: string;
  role: 'Developer' | 'Project Lead' | 'Admin';
}

interface AuthState {
  user: UserPayload | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string, role?: 'Developer' | 'Project Lead' | 'Admin') => void;
  register: (name: string, email: string, role: 'Developer' | 'Project Lead' | 'Admin') => void;
  logout: () => void;
  hydrateAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  // Login Handler
  login: (email: string, name = "Shashank", role = "Developer") => {
    const mockUser: UserPayload = {
      uid: `usr_${Date.now()}`,
      name: name || email.split('@')[0],
      email: email,
      role: role,
    };
    const mockToken = `jwt_mock_token_${Date.now()}`;

    // Save to localStorage for browser persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('taskmatrix_user', JSON.stringify(mockUser));
      localStorage.setItem('taskmatrix_token', mockToken);
    }

    set({
      user: mockUser,
      token: mockToken,
      isAuthenticated: true,
    });
  },

  // Register Handler
  register: (name: string, email: string, role: 'Developer' | 'Project Lead' | 'Admin') => {
    const newUser: UserPayload = {
      uid: `usr_${Date.now()}`,
      name: name,
      email: email,
      role: role,
    };
    const mockToken = `jwt_mock_token_${Date.now()}`;

    if (typeof window !== 'undefined') {
      localStorage.setItem('taskmatrix_user', JSON.stringify(newUser));
      localStorage.setItem('taskmatrix_token', mockToken);
    }

    set({
      user: newUser,
      token: mockToken,
      isAuthenticated: true,
    });
  },

  // Logout Handler
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('taskmatrix_user');
      localStorage.removeItem('taskmatrix_token');
    }

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  // Hydrate Auth from localStorage on page refresh
  hydrateAuth: () => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('taskmatrix_user');
      const savedToken = localStorage.getItem('taskmatrix_token');

      if (savedUser && savedToken) {
        try {
          const parsedUser = JSON.parse(savedUser);
          set({
            user: parsedUser,
            token: savedToken,
            isAuthenticated: true,
          });
        } catch (err) {
          console.error("Failed to parse stored user payload", err);
        }
      }
    }
  },
}));