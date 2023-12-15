import { useCallback } from 'react';

const useCapitalize = () => {
  const capitalize = useCallback((str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '';
  }, []);

  return capitalize;
};

export default useCapitalize;
