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

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(<CreateEntryModalTest {...props} store={store} />);
  });
  it("component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should set state when handle change is called", () => {
    wrapper.instance().handleChange(getEvent("name", "johnson"));
    expect(wrapper.state().name).toBeUndefined;
  });
});
