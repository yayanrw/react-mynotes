import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/constants";
import useLocalization from "../hooks/useLocalization";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const localizationInput = useLocalization("input");
  const { setEmail, setPassword, handleSubmit, isLoading } = useLogin();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
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
        <Form onSubmit={onSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label={localizationInput.emailLabel}
            className="mb-3"
          >
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={localizationInput.emailLabel}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label={localizationInput.passwordLabel}
          >
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
