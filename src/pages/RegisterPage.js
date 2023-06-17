import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLocalization from "../hooks/useLocalization";
import useAuth from "../hooks/useAuth";
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

  const onSubmit = (e) => {
    e.preventDefault();
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
        <Form onSubmit={onSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label={localizationInput.nameLabel}
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder={localizationInput.nameLabel}
              value={name}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label={localizationInput.emailLabel}
            className="mb-3"
          >
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={localizationInput.emailLabel}
              value={email}
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
              value={password}
            />
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
