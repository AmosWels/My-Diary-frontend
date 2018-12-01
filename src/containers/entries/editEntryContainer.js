import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Label,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardLink
} from "reactstrap";

const EditView = ({
  toggle,
  modal,
  classname,
  closemodal,
  handleChange,
  name,
  due_date,
  purpose,
  type
}) => {
  return (
    <React.Fragment>
      <CardLink id="cardlink" onClick={toggle} href="#">
        Edit |
      </CardLink>
      <Modal isOpen={modal} toggle={toggle} className={classname}>
        <ModalHeader toggle={toggle}>Edit Entry</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="email"
                name="name"
                id="exampleEmail"
                placeholder="enter name of entry ..."
                onChange={handleChange}
                value={name}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Due Date</Label>
              <Input
                type="text"
                name="due_date"
                id="exampleDate"
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                value={due_date}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Type</Label>
              <Input
                type="text"
                name="type"
                id="exampleEmail"
                placeholder="enter type of entry ..."
                onChange={handleChange}
                value={type}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Purpose</Label>
              <Input
                type="textarea"
                name="purpose"
                id="exampleText"
                onChange={handleChange}
                value={purpose}
                required
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="pull-right" onClick={closemodal} type="submit">
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
EditView.propTypes = {
  closemodal: PropTypes.func,
  handleChange: PropTypes,
  toggle: PropTypes.func,
  modal: PropTypes.string,
  classname: PropTypes.string,
  name: PropTypes.string,
  due_date: PropTypes.string,
  type: PropTypes.string,
  purpose: PropTypes.string
};
export default EditView;
