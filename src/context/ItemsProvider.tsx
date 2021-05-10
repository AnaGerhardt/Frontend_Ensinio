import React, { useEffect, useState } from "react";
import { getItems, Items } from "src/requests/getItems";
import { ItemsContext } from "src/context/ItemsContext";

export const ItemsProvider = (
  props: Omit<React.ProviderProps<Items | undefined>, "value">
) => {
  const [items, setItems] = useState<Items>();
  const request = async function buscarItens() {
    const req = await getItems();
    if (req) setItems(req);
  };

  useEffect(() => {
    request();
  }, []);

  return <ItemsContext.Provider {...props} value={items} />;
};
