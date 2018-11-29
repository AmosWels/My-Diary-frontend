import React from "react";
import { shallow, configure } from "enzyme";
import EntriesView from "../../containers/entries/entriesContainer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("test view all entries container component", () => {
  let component = shallow(<EntriesView />);
  var node = component.find(".containers");
  expect(node.length).toEqual(1);
});
