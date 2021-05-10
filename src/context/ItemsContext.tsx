import { createContext, useContext } from "react";
import { Items } from "src/requests/getItems";

export const ItemsContext = createContext<Items | undefined>(undefined);

export function useItems(): Items | undefined {
  const items = useContext(ItemsContext);
  return items;
}
