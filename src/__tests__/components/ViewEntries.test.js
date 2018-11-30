import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import { ViewDiariesTest } from "../../components/entries/viewEntries";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    dispatch: jest.fn()
  };
  const mockStore = configureMockStore();
  let wrapper;

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(<ViewDiariesTest {...props} store={store} />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
