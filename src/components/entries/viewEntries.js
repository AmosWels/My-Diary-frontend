import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllEntries } from "../../actions/diaries/diariesAction";
import EntriesView from "../../containers/entries/entriesContainer";

class ViewDiaries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getAllEntries());
  }

  render() {
    const entries = this.props.allentries;
    return (
      <div>
        <EntriesView results={entries} />
      </div>
    );
  }
}
ViewDiaries.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allentries: PropTypes.object
};
const mapStateToProps = state => ({
  allentries: state.entriesReducer.entries
});
const mapDispatchToProps = dispatch => ({ dispatch });
export { ViewDiaries as ViewDiariesTest };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDiaries);
