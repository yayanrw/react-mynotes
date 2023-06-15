import React, { useContext, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { APP_NAME } from "../utils/constants";
import useLocalization from "../hooks/useLocalization";
import useInput from "../hooks/useInput";
import { fetchLogin } from "../datasources/auth_datasource";
import { ApplicationException, ServerException } from "../utils/exceptions";
import { swalError, swalWarning } from "../utils/swal_helper";
import { setToken } from "../datasources/local_storage_datasource";
import AuthContext from "../contexts/AuthContext";

const LoginPage = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const localizationInput = useLocalization("input");
  const localizationSwal = useLocalization("swal");
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetchLogin({ email: email, password: password });

      setIsLoading(false);
      const token = response.data.accessToken;
      const data = response.data;
      setToken(token);
      setAuth(1);
      navigate("/notes/active");
    } catch (error) {
      setIsLoading(false);
      if (error instanceof ApplicationException) {
        swalWarning(localizationSwal.warning, error.message);
      } else if (error instanceof ServerException) {
        swalError(localizationSwal.serverError, error.message);
      } else {
        swalError(localizationSwal.anErrorOccured, error.message);
      }
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "800px",
      }}
    >
      <Container>
        <h1 className="pb-5 text-center">{APP_NAME}</h1>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label={localizationInput.emailLabel}
            className="mb-3"
          >
            <Form.Control
              type="email"
              onChange={setEmail}
              placeholder={localizationInput.emailLabel}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label={localizationInput.passwordLabel}
          >
            <Form.Control
              type="password"
              onChange={setPassword}
              placeholder={localizationInput.passwordLabel}
            />
          </FloatingLabel>
          <div className="d-grid gap-2 pt-4 pb-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? localizationInput.loading : localizationInput.login}
            </Button>
          </div>
          <p>
            {localizationInput.dontHaveAccount}{" "}
            <Link to="/register">{localizationInput.register}</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
