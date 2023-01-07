import { createContext } from "react";
import { UserInterface } from "../Types";

type UserContextType = {
  users: UserInterface[];
  itemsPerPage: number;
  total: number;
  pageCount: number;
  currentItems: UserInterface[];
  handlePageClick: (e: any) => void;
  isLoading: boolean;
};

const UserContext = createContext({} as UserContextType);

const { Provider, Consumer } = UserContext;

export { Consumer, Provider, UserContext };
