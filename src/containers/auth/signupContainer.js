import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

const SignUpView = ({
  handleSignup,
  handleChange,
  username,
  password,
  confirm_password
}) => {
  return (
    <div>
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSignup}>
                      <h1>SignUp</h1>
                      <p className="text-muted">Sign Up with My Diary</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={handleChange}
                          name="username"
                          value={username}
                          required
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={handleChange}
                          name="password"
                          value={password}
                          required
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Repeat Password"
                          autoComplete="current-password"
                          onChange={handleChange}
                          name="confirm_password"
                          value={confirm_password}
                          required
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
                            Signup
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Login</h2>
                      <p>If you already have an account, proceed to login</p>
                      <Link to="/">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Login Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

SignUpView.propTypes = {
  handleSignup: PropTypes.func,
  handleChange: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  confirm_password: PropTypes.string
};

export default SignUpView;
