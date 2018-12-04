import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import DeleteEntryConfirm from "../../components/entries/deleteEntry";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    handleDelete: jest.fn(),
    uniqueId: 1,
    submit: jest.fn()
  };
  const onClick = jest.fn();
  const mockStore = configureMockStore();
  let wrapper;

  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(
      <DeleteEntryConfirm {...props} store={store} onClick={onClick} />
    );
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("it has a card Link", () => {
    let cardlink = wrapper.find("#cardlink");
    const mySpy = jest.spyOn(wrapper.instance(), "submit");
    cardlink.simulate("click");
    expect(mySpy).toHaveBeenCalledTimes(0);
    expect(cardlink.length).toEqual(1);
  });

  it("should call submit", () => {
    const submit = jest.fn();
    let cardlink = wrapper.find("CardLink");
    cardlink.simulate("click");
    expect(cardlink.length).toEqual(1);
    expect(submit).toHaveBeenCalledTimes(0);
  });
});
