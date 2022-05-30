import {
  useCallback, useState,
} from 'react';

const useToggle = (intialState = false) => {
  const [state, setState] = useState(intialState);
  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggle];
};

export default useToggle;
