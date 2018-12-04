import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import { IndexTest } from "../../components/auth/index";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const history = { push: jest.fn() };
  const props = {
    history,
    handleChange: jest.fn(),
    handleLogin: jest.fn(),
    dispatch: jest.fn(),
    username: "",
    password: "",
    confirm_password: "",
    window: { location: "/entries" }
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
    wrapper = shallow(<IndexTest {...props} store={store} />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should set state when handle change is called", () => {
    wrapper.instance().handleChange(getEvent("username", "johnson"));
    expect(wrapper.state().username).toEqual("johnson");
  });

  it("should handle Login when called", () => {
    wrapper.instance().handleLogin(getEvent());
    expect(wrapper.state().username).toEqual("");
  });

  it("should not redirect after login failure", () => {
    const nextprops = {
      userdata: {
        isLoggedIn: false
      }
    };
    wrapper.setProps({ ...nextprops });
    expect(history.push).not.toBeCalled();
  });

  it("test view run component will receive props", () => {
    wrapper.setProps({
      userdata: {
        isLoggedIn: true,
        user: ""
      }
    });
  });
});
