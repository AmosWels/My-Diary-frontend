import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../navigation/navBar";

const EntriesView = () => {
  return (
    <div>
      <div className="containers">
        <NavBar /> <p>Welcome Home</p>
      </div>
    </div>
  );
};
EntriesView.propTypes = {
  handleSignup: PropTypes.func
};

export default EntriesView;
