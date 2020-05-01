import { useState } from "react";

/**
 * Helper Hook For Forms
 * @param {initial State of form} initialState
 */
const useForm = (initialState) => {
  const [formInputs, setFormInputs] = useState(initialState);

  const handleChange = (fieldName, value) => {
    setFormInputs({
      ...formInputs,
      [fieldName]: value,
    });
  };

  return [formInputs, handleChange];
};

export default useForm;
