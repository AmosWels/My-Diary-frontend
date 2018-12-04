import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import { SignupTest } from "../../components/auth/signup";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const history = { push: jest.fn() };
  const props = {
    history,
    handleChange: jest.fn(),
    handleSignup: jest.fn(),
    dispatch: jest.fn(),
    username: "",
    password: "",
    confirm_password: "sdf",
    location: { pathname: "/auth/signup" }
  };
  const getEvent = (name = "", value = "") => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value
    }
  });
  const mockStore = configureMockStore();
  let wrapper;

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(<SignupTest {...props} store={store} />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should set state when handle change is called", () => {
    wrapper.instance().handleChange(getEvent("username", "johnson"));
    expect(wrapper.state().username).toEqual("johnson");
  });

  it("should handle signup when called", () => {
    wrapper.instance().handleSignup(getEvent());
    expect(wrapper.state().username).toEqual("");
  });

  it("should not redirect after signup failure", () => {
    const nextprops = {
      user: {
        user: { Message: "Created Succesfull" }
      }
    };
    wrapper.setProps({ ...nextprops });
    expect(history.push).not.toBeCalled();
  });

  it("should redirect after succesful signup", () => {
    const nextprops = {
      user: {
        user: { Message: "Created Succesfully" }
      }
    };
    wrapper.setProps({ ...nextprops });
    expect(history.push).toBeCalled();
  });

  it("should handle password dont match ", () => {
    wrapper.instance().handleSignup(getEvent("password", "johnson"));
    expect(wrapper.state().confirm_password).not.toEqual("dfd");
  });
});
