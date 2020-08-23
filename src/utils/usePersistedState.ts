import { useState, useEffect } from "react";

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const storageitem = localStorage.getItem(key);

    if (storageitem) {
      return JSON.parse(storageitem);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
