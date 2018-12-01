import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getAllEntries,
  deleteAnEntry
} from "../../actions/diaries/diariesAction";
import EntriesView from "../../containers/entries/entriesContainer";

class ViewDiaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.entry.Message === "your entry has been succesfully created!" ||
      nextProps.deleted.Message === "Deleted your entry succesfully!" ||
      nextProps.modify.Message ==="modified your entry succesfully!"
    ) {
      this.props.dispatch(getAllEntries());
    }
  }

  handleDelete = id => {
    this.props.dispatch(deleteAnEntry(id));
  };

  componentDidMount() {
    this.props.dispatch(getAllEntries());
  }

  render() {
    const entries = this.props.allentries;
    return (
      <div>
        <EntriesView results={entries} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
ViewDiaries.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allentries: PropTypes.array,
  entry: PropTypes.object,
  deleted: PropTypes.object,
  Message: PropTypes.string,
  modify:PropTypes.object
};
const mapStateToProps = state => ({
  allentries: state.entriesReducer.entries,
  entry: state.entriesReducer.entry,
  deleted: state.entriesReducer.deleted,
  modify:state.entriesReducer.modify
});
const mapDispatchToProps = dispatch => ({ dispatch });
export { ViewDiaries as ViewDiariesTest };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDiaries);
