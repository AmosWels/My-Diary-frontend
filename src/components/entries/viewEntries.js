import React, { Component } from "react";
import EntriesView from "../../containers/entries/entriesContainer";
class ViewDiaries extends Component {
  state = {};
  render() {
    return (
      <div>
        <EntriesView />
      </div>
    );
  }
}
export {ViewDiaries as ViewDiariesTest};
export default ViewDiaries;
