import React, { useState } from 'react';
import { useEffect } from 'react';

const useFormValidation = validateFn => {
  const [inputValue, setInputValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [inputError, setInputError] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value.trim());
  };

  const handleInputTouch = () => {
    setIsInputTouched(true);
  };

  useEffect(() => {
    if (isInputTouched) {
      setInputError(validateFn(inputValue));
    }
  }, [isInputTouched, inputValue]);

  return {
    inputValue,
    inputError,
    handleInputChange,
    handleInputTouch,
  };
};

export default useFormValidation;
