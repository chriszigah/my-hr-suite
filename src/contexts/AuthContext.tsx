import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
// Declare User Types
export type User = {
  name: string;
  email: string;
};

// Declare User Context Interface
export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

// Default State
const defaultState = {
  user: {
    name: "defualtUser",
    email: "DefaultEmail",
  },
  setUser: (user: User) => {},
} as UserContextInterface;

// Create Context
export const UserContext = createContext(defaultState);

// Declare User Context Provider Props
type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    name: "defualtUser",
    email: "DefaultEmail",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
