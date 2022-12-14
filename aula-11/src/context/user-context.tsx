import {
  useContext,
  createContext,
  PropsWithChildren,
  useEffect,
  useReducer,
  Dispatch,
} from "react";

export type UserType = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

type InitialState = {
  users: UserType[];
};

const initialState: InitialState = { users: [] };

type Action = {
  type: "CLEAN" | "ADD";
  payload: InitialState;
};
const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        users: [...state.users, ...action.payload.users],
      };
    case "CLEAN":
      return {
        users: [],
      };
    default:
      throw new Error("SEM ACTION");
  }
};

type initialContext = {
  state?: InitialState;
  dispatch?: Dispatch<Action>;
};

const UserContext = createContext<initialContext>({});

export const useUser = () => useContext(UserContext);

export const UsersProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
