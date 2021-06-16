import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

interface PageState {
  page: number;
  total: number;
}
interface PageAction {
  type: "update" | "reset" | "updatetotal";
  payload?: number;
}

const PaginationStateContext = createContext<PageState>(null);
const PaginationDispatchContext = createContext<Dispatch<PageAction>>(null);

const reducer = ({ total, page }: PageState, action: PageAction) => {
  switch (action.type) {
    case "reset":
      return { page: 1, total };
    case "update":
      return { page: action.payload, total };
    case "updatetotal":
      return { page, total: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

export default function PaginationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, { page: 1, total: 1 });
  return (
    <PaginationStateContext.Provider value={state}>
      <PaginationDispatchContext.Provider value={dispatch}>
        {children}
      </PaginationDispatchContext.Provider>
    </PaginationStateContext.Provider>
  );
}

export function usePage() {
  const state = useContext(PaginationStateContext);

  if (state == null) {
    throw new Error("usePage must be used within step provider");
  }

  return state;
}

export function useDispatchPagination() {
  const state = useContext(PaginationDispatchContext);

  if (state == null) {
    throw new Error("useDispatchPagination must be used within step provider");
  }

  return state;
}
