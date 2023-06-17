import { useContext, useState } from "react";
import { fetchLogin, fetchRegister } from "../datasources/auth_datasource";
import AuthContext from "../contexts/AuthContext";
import useErrorNetworkHandler from "./useErrorNetworkHandler";
import { removeToken, setToken } from "../datasources/local_storage_datasource";
import { useNavigate } from "react-router-dom";
import { swalSuccess } from "../utils/swal_helper";
import useLocalization from "./useLocalization";

const useAuth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setAuth } = useContext(AuthContext);
  const { handleApiError } = useErrorNetworkHandler();
  const localizationSwal = useLocalization("swal");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
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

  const handleRegister = async () => {
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

  const handleLogout = () => {
    removeToken();
    setAuth(null);
    navigate("/login");
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
    passwordConfirmation,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    isLoading,
    isPasswordSame,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};

export default useAuth;
