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
  ModalFooter
} from "reactstrap";

const CreateView = ({
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
    <div>
      <a target="_blank" onClick={toggle}>
        <Button block color="link" id="btn_link">
          Create Entry
        </Button>
      </a>
      <Modal isOpen={modal} toggle={toggle} className={classname}>
        <ModalHeader toggle={toggle}>Create New Entry</ModalHeader>
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
            Create
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
CreateView.propTypes = {
  closemodal: PropTypes.func,
  handleChange: PropTypes.func,
  toggle: PropTypes.func,
  modal: PropTypes.bool,
  classname: PropTypes.string,
  name: PropTypes.string,
  due_date: PropTypes.string,
  type: PropTypes.string,
  purpose: PropTypes.string
};
export default CreateView;
