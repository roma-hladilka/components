import { useState } from 'react';

interface IAppState {
  date?: Date;
}

const initialAppState: IAppState = {
  date: undefined,
};

export const useAppState = () => {
  const [state, setState] = useState(initialAppState);

  const onStateChange =
    <Field extends keyof typeof state>(field: Field) =>
    (value: typeof state[Field]) =>
      setState(s => ({ ...s, [field]: value }));

  return {
    ...state,
    onDateChange: onStateChange('date'),
  };
};
