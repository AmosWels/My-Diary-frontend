import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import { CreateEntryModalTest } from "../../components/entries/createEntry";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    handleUpdate: jest.fn(),
    handleChange: jest.fn(),
    dispatch: jest.fn(),
    name: "",
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
  const modalClose = jest.fn();
  const toggle = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(
      <CreateEntryModalTest
        {...props}
        store={store}
        modalClose={modalClose}
        toggle={toggle}
        handleSubmit={handleSubmit}
      />
    );
  });
  it("component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should set state when handle change is called", () => {
    wrapper.instance().handleChange(getEvent("name", "johnson"));
    expect("name" in wrapper.state()).toBeUndefined;
  });
  it("should close the modal when modalClose is called", () => {
    const mySpy = jest.spyOn(wrapper.instance(), "modalClose");
    expect(mySpy).toHaveBeenCalledTimes(0);
    expect(wrapper.instance().modalClose()).toBeFalsy();
  });
});
