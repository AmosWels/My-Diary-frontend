import React from "react";
import { shallow, configure } from "enzyme";
import NavBar from "../../navigation/navBar";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    isOpen: false,
    toggle: jest.fn(),
    setState: jest.fn(),
    clearToken: jest.fn()
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar {...props} />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("toggle should be called", () => {
    const mySpy = jest.spyOn(wrapper.instance(), "toggle");
    wrapper.find("NavbarToggler").simulate("click");
    expect(mySpy).toHaveBeenCalledTimes(0);
  });
});
