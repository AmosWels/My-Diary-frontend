import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import { SignupCreateEntryModalTest } from "../../components/entries/createEntry";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const history = {push : jest.fn()};
  const props = {
    history,
    handleSubmit: jest.fn(),
    modalClose: jest.fn(),
    dispatch: jest.fn(),
    handleChange:jest.fn(),
    toggle:jest.fn(),
    name: "",
    purpose: "",
    due_date: "",
    type: "",
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
    wrapper = shallow(<SignupCreateEntryModalTest {...props} store={store} />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should set state when handle change is called", () => {
    wrapper.instance().handleChange(getEvent("purpose", "home"));
    expect(wrapper.state().username).toBeUndefined();
  });

  it("should handle submit when called", () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(wrapper.state().username).toBeUndefined();
  });

  it("should not redirect after submit failure", () => {
    const nextprops = {
      user:{
        user:{ Message:"Created Succesfull"}
      }
    };
    wrapper.setProps({...nextprops});
    expect(history.push).not.toBeCalled();
  });
});
