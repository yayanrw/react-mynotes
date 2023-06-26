import { useState } from "react";
import useLocalization from "./useLocalization";

const useForm = (initialValue, validationSchema) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const localizationInput = useLocalization("input");

  const handleChange = (inputValue) => {
    setValue(inputValue);

    const validationError = validateInput(inputValue, validationSchema);
    setError(validationError);
  };

  const validateInput = (value, schema) => {
    const { required, minLength, maxLength, type } = schema;

    if (required && !value) {
      return localizationInput.required;
    }

    if (minLength && value.length < minLength) {
      return `${localizationInput.minLength} ${minLength}`;
    }

    if (maxLength && value.length > maxLength) {
      return `${localizationInput.maxLength}  ${maxLength}`;
    }

    if (
      type === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      return localizationInput.invalidEmailFormat;
    }

    return "";
  };

  return [
    value,
    error,
    handleChange,
    validateInput(value, validationSchema) === "",
  ];
};

export default useForm;
