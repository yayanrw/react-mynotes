import { useState } from "react";
import useErrorNetworkHandler from "./useErrorNetworkHandler";
import { fetchRegister } from "../datasources/auth_datasource";
import { swalSuccess } from "../utils/swal_helper";
import useLocalization from "./useLocalization";

const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const localizationSwal = useLocalization("swal");
  const { handleApiError } = useErrorNetworkHandler();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await fetchRegister({ name: name, email: email, password: password });
      resetState();
      swalSuccess(localizationSwal.success, localizationSwal.registerSuggest);
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
    }
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };

  return {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    isLoading,
    handleSubmit,
  };
};

export default useRegister;
