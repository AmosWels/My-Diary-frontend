import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import  DeleteEntryConfirm  from "../../components/entries/deleteEntry";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    handleDelete: jest.fn(),
    uniqueId:"1"
  };
  const mockStore = configureMockStore();
  let wrapper;

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(<DeleteEntryConfirm {...props} store={store} />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
