import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import ViewEntry from "../../components/entries/viewEntry";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    dispatch: jest.fn(),
    buttonLabel: "",
    className: "",
    name: "",
    purpose: "",
    due_date: "",
    date_created: ""
  };
  const mockStore = configureMockStore();
  let wrapper;

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(<ViewEntry {...props} store={store} />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
