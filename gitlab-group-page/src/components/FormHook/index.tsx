import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Form hooks for handling the UseForm form in Login-component.

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const history = useHistory();

  /**
   * This method will set the values when something in the input fields are changed. 
   */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  /**
   * Method that handles submit. When the user submits the form. It will call the loginuUserCallback() 
   * and also change page. 
   */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
    history.push("/labels");
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
