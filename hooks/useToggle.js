import { useReducer } from 'react';

const _toggler = (currentValue, newValue) => {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
};

export const useToggle = (initialValue = false) => {
  return useReducer(_toggler, initialValue);
};
