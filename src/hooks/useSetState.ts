import { useCallback, useState } from "react";

export const useSetState = <T extends Record<string, any>>(
  value: T
): [state: T, setState: (input: ((s: T) => T) | Partial<T>) => void] => {
  const [state, _setState] = useState<T>(value);

  const setState = useCallback((input: ((s: T) => T) | Partial<T>) => {
    _setState((s) =>
      typeof input === "function" ? input(s) : { ...s, ...input }
    );
  }, []);

  return [state, setState];
};
