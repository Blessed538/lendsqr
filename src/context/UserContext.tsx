import { createContext } from "react";
import { UserInterface } from "../Types";

const UserContext = createContext<{ users: UserInterface[] }>({ users: [] });

const { Provider, Consumer } = UserContext;

export { Consumer, Provider, UserContext };
