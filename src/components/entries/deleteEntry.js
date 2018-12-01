import React, { Component } from "react";
import PropTypes from "prop-types";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { CardLink } from "reactstrap";

class DeleteEntryConfirm extends Component {
  submit = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.handleDelete(this.props.uniqueId)
        },
        {
          label: "No"
        }
      ]
    });
  };

  render() {
    return <CardLink id="cardlink" onClick={this.submit} href="#">Delete |</CardLink>;
  }
}
DeleteEntryConfirm.propTypes = {
  handleDelete: PropTypes.func,
  uniqueId: PropTypes.id
};
export default DeleteEntryConfirm;
