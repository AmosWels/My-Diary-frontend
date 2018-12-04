import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import { EditEntryModalTest } from "../../components/entries/editEntry";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    handleUpdate: jest.fn(),
    handleChange: jest.fn(),
    dispatch: jest.fn(),
    name: "peter",
    type: ""
  };
  const getEvent = (name = "", value = "") => ({
    target: {
      name,
      value
    }
  });
  const mockStore = configureMockStore();
  let wrapper;

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(<EditEntryModalTest {...props} store={store} />);
  });
  it("component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should set state when handle change is called", () => {
    wrapper.instance().handleChange(getEvent("name", "johnson"));
    expect(wrapper.state().name).toBeUndefined;
  });
  it("component should have toggle called", () => {
    const mySpy = jest.spyOn(wrapper.instance(), "modalClose");
    expect(mySpy).toHaveBeenCalledTimes(0);
    expect(wrapper.instance().modalClose()).toBeFalsy();
  });
});
