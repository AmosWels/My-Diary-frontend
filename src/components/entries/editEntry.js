import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EditView from "../../containers/entries/editEntryContainer";
import { updateEntryAction } from "../../actions/diaries/diariesAction";

class EditEntryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      due_date: this.props.due_date,
      name: this.props.name,
      purpose: this.props.purpose,
      type: this.props.type
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleUpdate = () => {
    const data = {
      due_date: this.state.due_date,
      name: this.state.name,
      purpose: this.state.purpose,
      type: this.state.type
    };
    this.props.dispatch(updateEntryAction(this.props.uniqueId,data));
  };
  modalClose = () => {
    this.toggle();
    this.handleUpdate();
  };

  render() {
    const { modal, due_date, name, purpose, type } = this.state;
    const classname = this.props.className;
    return (
      <React.Fragment>
        <EditView
          toggle={this.toggle}
          modal={modal}
          name={name}
          due_date={due_date}
          purpose={purpose}
          type={type}
          classname={classname}
          closemodal={this.modalClose}
          handleChange={this.handleChange}
          props={this.props}
        />
      </React.Fragment>
    );
  }
}
EditEntryModal.propTypes = {
  emailShare: PropTypes.func,
  className: PropTypes.string,
  dispatch: PropTypes.func,
  props: PropTypes.object,
  uniqueId:PropTypes.string
};
const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  articles: state.articlesReducer
});
export {EditEntryModal as EditEntryModalTest};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntryModal);
