import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const history = useHistory();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

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
