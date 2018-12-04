import React from "react";
import {
  CardLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge
} from "reactstrap";
import PropTypes from "prop-types";

class ViewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <React.Fragment>
        <CardLink id="cardlink" onClick={this.toggle} href="#">
          View |
        </CardLink>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {this.props.name}
          </ModalHeader>
          <ModalBody id="scrollview">{this.props.purpose}</ModalBody>
          <ModalFooter>
            <Badge color="warning" className="float-left">
              Due Date - {this.props.due_date}
            </Badge>{" "}
            <Badge color="info" className="float-left">
              Created On - {this.props.date_created}
            </Badge>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
ViewEntry.propTypes = {
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  purpose: PropTypes.string,
  due_date: PropTypes.string,
  date_created: PropTypes.string
};

export default ViewEntry;
