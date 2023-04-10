import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const MyForm = () => {
  const [fromValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [firstNameValidation, setFirstNameValidation] = useState();
  const [lastNameValidation, setLastNameValidation] = useState();
  const [emailValidation, setEmailValidation] = useState();
  const [phoneValidation, setPhoneValidation] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromValue);
    emailjs
      .send(
        "service_f4ey52m",
        "template_dy92n3b",
        fromValue,
        "EuW51s8QSRrW-7v9U"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.open(
            "https://www.directmediationservices.co.uk/mediation-legal-aid/"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container row justify-content-center mt-5">
      <Form className="col-8" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            isInvalid={firstNameValidation}
            placeholder="First Name"
            value={fromValue.firstName}
            onChange={(e) => {
              setFormValue({ ...fromValue, firstName: e.target.value });
              if (e.target.value) {
                setFirstNameValidation(false);
              } else {
                setFirstNameValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            isInvalid={lastNameValidation}
            placeholder="Last Name"
            value={fromValue.lastName}
            onChange={(e) => {
              setFormValue({ ...fromValue, lastName: e.target.value });
              if (e.target.value) {
                setLastNameValidation(false);
              } else {
                setLastNameValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            isInvalid={emailValidation}
            placeholder="E-mail"
            value={fromValue.email}
            onChange={(e) => {
              setFormValue({ ...fromValue, email: e.target.value });
              if (e.target.value) {
                setEmailValidation(false);
              } else {
                setEmailValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            required
            isInvalid={phoneValidation}
            placeholder="Phone Number"
            value={fromValue.phone}
            onChange={(e) => {
              setFormValue({ ...fromValue, phone: e.target.value });
              if (e.target.value) {
                setPhoneValidation(false);
              } else {
                setPhoneValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="container ">
          <div className="mt-3 row justify-content-end">
            <Button className="col-2" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MyForm;
