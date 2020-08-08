import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
const Admin = () => {
    return (
        <Form className="login-form">
     <h1> Welcome Admin </h1>
      <Row className="head" form>
     
        <Col md={12}>
          <FormGroup>
            <Label   for="exampleEmail">Email</Label>
            <Input className="text" type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label  for="examplePassword">Password</Label>
            <Input className="text pass" type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
       
        
      <FormGroup check>
        <Input className="check1"  type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button className="btn-login ">Sign In</Button>
       
      
    </Form>
    );
};

export default  Admin;