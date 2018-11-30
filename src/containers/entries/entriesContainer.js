import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../navigation/navBar";
import {
  Badge,
  Card,
  CardLink,
  CardBody,
  CardHeader,
  Col,
  CardFooter
} from "reactstrap";

const EntriesView = ({ results }) => {
  let showEntries;
  if (!(results instanceof Array)) {
    showEntries = (
      <Col xs="12" sm="12" md="12" id="column_gap">
        <Card className="card-accent-primary border-primary">
          <CardHeader>Hello, Welcome</CardHeader>
          <CardBody>
            <center>
              <Badge color="danger" className="" id="entrymessage">
                You dont have any entries yet, please first create
              </Badge>
            </center>
          </CardBody>
        </Card>
      </Col>
    );
  } else {
    showEntries = results.map(entry => (
      <Col xs="12" sm="6" md="4" key={entry.id} id="column_gap">
        <Card className="card-accent-primary border-primary">
          <CardHeader>
            {entry.name}{" "}
            <div className="d-inline actions">
              <CardLink id="cardlink" href="">
                Edit |
              </CardLink>
              <CardLink id="cardlink" href="">
                View |
              </CardLink>
              <CardLink id="cardlink" href="">
                Delete
              </CardLink>
            </div>
          </CardHeader>
          <Badge color="warning" className="float-left">
            Due Date - {entry.due_date}
          </Badge>
          <CardBody>{entry.purpose.substring(0, 80)} . . .</CardBody>
          <CardFooter>
            <Badge color="info" className="float-left">
              Created On - {entry.date_created}
            </Badge>
            <Badge color="info" className="float-right">
              Type - {entry.type}
            </Badge>
          </CardFooter>
        </Card>
      </Col>
    ));
  }
  return (
    <div>
      <div className="containers">
        <NavBar />
        <br />
        <div className="pic-container">{showEntries}</div>
      </div>
    </div>
  );
};
EntriesView.propTypes = {
  results: PropTypes.array,
  handleSignup: PropTypes.func
};

export default EntriesView;
