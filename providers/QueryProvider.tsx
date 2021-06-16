import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useReducer,
  useState,
} from "react";

const FilterStateContext =
  createContext<[string, Dispatch<SetStateAction<string>>]>(null);

export default function QueryProvider({ children }: { children: ReactNode }) {
  const state = useState("");
  return (
    <FilterStateContext.Provider value={state}>
      {children}
    </FilterStateContext.Provider>
  );
}

export function useQuery() {
  const state = useContext(FilterStateContext);

  if (state == null) {
    throw new Error("useQuery must be used within step provider");
  }

  return state;
}
