import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLocalization from "../hooks/useLocalization";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";
import { confirmationDialog } from "../utils/swal_helper";

const RegisterPage = () => {
  const localizationInput = useLocalization("input");
  const localizationSwal = useLocalization("swal");
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    isLoading,
    handleRegister,
  } = useAuth();
  const [nameValue, nameError, nameValidate] = useForm("", {
    required: true,
    minLength: 3,
  });

  const [emailValue, emailError, emailValidate] = useForm("", {
    required: true,
    type: "email",
  });
  const [passwordValue, passwordError, passwordValidate] = useForm("", {
    required: true,
    minLength: 8,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nameValue !== "" &&
      nameError === "" &&
      emailValue !== "" &&
      emailError === "" &&
      passwordValue !== "" &&
      passwordError === ""
    ) {
      confirmationDialog(
        localizationSwal.registerDataWarn,
        localizationSwal.registerIt,
        localizationSwal.areYouSure,
        (confirmed) => {
          if (confirmed) {
            handleRegister();
          }
        }
      );
    } else {
      nameValidate(nameValue);
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
        <h1 className="pb-5 text-center">{localizationInput.register}</h1>
        <Form noValidate onSubmit={onSubmit}>
          <FloatingLabel
            controlId="name"
            label={localizationInput.nameLabel}
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) => {
                nameValidate(e.target.value);
                setName(e.target.value);
              }}
              placeholder={localizationInput.nameLabel}
              value={name}
              isValid={nameError === "" && nameValue !== ""}
              isInvalid={nameError !== ""}
              required
            />
            <Form.Control.Feedback type="invalid">
              {nameError}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="email"
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
              value={email}
              isValid={emailError === "" && emailValue !== ""}
              isInvalid={emailError !== ""}
              required
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="password"
            label={localizationInput.passwordLabel}
          >
            <Form.Control
              type="password"
              onChange={(e) => {
                passwordValidate(e.target.value);
                setPassword(e.target.value);
              }}
              placeholder={localizationInput.passwordLabel}
              value={password}
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
              {isLoading
                ? localizationInput.loading
                : localizationInput.register}
            </Button>
          </div>
          <p>
            {localizationInput.haveAnAccount}{" "}
            <Link to="/login">{localizationInput.login}</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterPage;
