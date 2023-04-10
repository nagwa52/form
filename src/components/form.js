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

  const handleSubmit = (event) => {
    event.preventDefault();
console.log(fromValue)   
emailjs.send(
        "service_f4ey52m",
        "template_dy92n3b",
        fromValue,
        "EuW51s8QSRrW-7v9U"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container row justify-content-center mt-5">
      <Form className="col-8" onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={fromValue.firstName}
            onChange={(e) =>
              setFormValue({ ...fromValue, firstName: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={fromValue.lastName}
            onChange={(e) =>
              setFormValue({ ...fromValue, lastName: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            value={fromValue.email}
            onChange={(e) =>
              setFormValue({ ...fromValue, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            value={fromValue.phone}
            onChange={(e) =>
              setFormValue({ ...fromValue, phone: e.target.value })
            }
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
