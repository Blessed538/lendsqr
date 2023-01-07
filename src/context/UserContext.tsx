import { createContext } from "react";
import { UserInterface } from "../Types";

const UserContext = createContext<{
  users: UserInterface[];
  isLoading: boolean;
}>({ users: [], isLoading: false });

const { Provider, Consumer } = UserContext;

export { Consumer, Provider, UserContext };
