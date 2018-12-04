import React from "react";
import { mount, configure } from "enzyme";
import CreateView from "../../containers/entries/createEntryContainer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("test create container component", () => {
  let component = mount(<CreateView />);
  var node = component.find("Modal");
  expect(node.length).toEqual(1);
  expect(component).toBeTruthy();
});
