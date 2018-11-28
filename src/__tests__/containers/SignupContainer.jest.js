import React from "react";
import { shallow, configure } from "enzyme";
import SignUp from "../../containers/auth/signupContainer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("test signup container component", () => {
  let component = shallow(<SignUp />);
  var node = component.find("Container");
  expect(node.length).toEqual(1);
});
