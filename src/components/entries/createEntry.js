import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateView from "../../containers/entries/createEntryContainer";
import { createEntryAction } from "../../actions/diaries/diariesAction";
class CreateEntryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      due_date: "",
      name: "",
      purpose: "",
      type: ""
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

  handleSubmit = () => {
    const data = {
      due_date: this.state.due_date,
      name: this.state.name,
      purpose: this.state.purpose,
      type: this.state.type
    };
    this.props.dispatch(createEntryAction(data));
  };
  modalClose = () => {
    this.toggle();
    this.handleSubmit();
  };

  render() {
    const { modal, due_date, name, purpose, type } = this.state;
    const classname = this.props.className;
    return (
      <div>
        <CreateView
          toggle={this.toggle}
          modal={modal}
          name={name}
          due_date={due_date}
          purpose={purpose}
          type={type}
          classname={classname}
          closemodal={this.modalClose}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
CreateEntryModal.propTypes = {
  emailShare: PropTypes.func,
  className: PropTypes.string,
  dispatch: PropTypes.func
};
const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  articles: state.articlesReducer
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntryModal);
