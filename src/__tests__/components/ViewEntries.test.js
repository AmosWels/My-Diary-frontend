import React from "react";
import { shallow, configure } from "enzyme";
import { ViewDiariesTest } from "../../components/entries/viewEntries";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ViewDiariesTest/>);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

