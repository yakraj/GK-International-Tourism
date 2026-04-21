const LOCAL_USERS_KEY = "gk_tours_users";
const CURRENT_USER_KEY = "user";
const TOKEN_KEY = "token";

const getLocalUsers = (): any[] => {
  const users = localStorage.getItem(LOCAL_USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveLocalUsers = (users: any[]) => {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
};

export const authService = {
  register: async (userData: any) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const users = getLocalUsers();
    if (users.find((u) => u.email === userData.email)) {
      throw new Error("User already exists");
    }

    const newUser = {
      ...userData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveLocalUsers(users);
    return { user: newUser };
  },

  login: async (credentials: any) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const users = getLocalUsers();
    const user = users.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password,
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Mock token
    const token = "mock-jwt-token-" + Math.random().toString(36).substr(2);

    return { user, token };
  },

  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
  },

  getCurrentUser: () => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(TOKEN_KEY);
  },
};
