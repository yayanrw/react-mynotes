import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/constants";
import useLocalization from "../hooks/useLocalization";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";

const LoginPage = () => {
  const localizationInput = useLocalization("input");
  const [emailValue, emailError, emailValidate] = useForm("", {
    required: true,
    type: "email",
  });
  const [passwordValue, passwordError, passwordValidate] = useForm("", {
    required: true,
    minLength: 8,
  });
  const { setEmail, setPassword, handleLogin, isLoading } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      emailValue !== "" &&
      emailError === "" &&
      passwordValue !== "" &&
      passwordError === ""
    ) {
      handleLogin();
    } else {
      emailValidate(emailValue);
      passwordValidate(passwordValue);
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
        <Form noValidate onSubmit={onSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label={localizationInput.emailLabel}
            className="mb-3"
          >
            <Form.Control
              type="email"
              onChange={(e) => {
                emailValidate(e.target.value);
                setEmail(e.target.value);
              }}
              placeholder={localizationInput.emailLabel}
              isValid={emailError === "" && emailValue !== ""}
              isInvalid={emailError !== ""}
              required
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label={localizationInput.passwordLabel}
          >
            <Form.Control
              type="password"
              onChange={(e) => {
                passwordValidate(e.target.value);
                setPassword(e.target.value);
              }}
              placeholder={localizationInput.passwordLabel}
              isValid={passwordError === "" && passwordValue !== ""}
              isInvalid={passwordError !== ""}
              required
            />
            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>
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
