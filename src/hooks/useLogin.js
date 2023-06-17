import { useContext, useState } from "react";
import { fetchLogin } from "../datasources/auth_datasource";
import AuthContext from "../contexts/AuthContext";
import useErrorNetworkHandler from "./useErrorNetworkHandler";
import { setToken } from "../datasources/local_storage_datasource";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setAuth } = useContext(AuthContext);
  const { handleApiError } = useErrorNetworkHandler();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const { data } = await fetchLogin({ email, password });
      const { accessToken } = data;
      setToken(accessToken);
      setAuth(1);
      setIsLoading(false);
      navigate("/notes/active");
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
    }
  };

  return { setEmail, setPassword, isLoading, handleSubmit };
};

export default useLogin;
