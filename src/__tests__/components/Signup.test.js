import React from "react";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import Signup from "../../components/auth/signup";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
configure({ adapter: new Adapter() });

describe("SignupUser component", () => {
  const props = {
    history: { push: jest.fn() },
    username:"",
    password:"",
    confirm_password:""
  };
  const mockStore = configureMockStore();
  let wrapper;
  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(
      <Provider store={store}>
        <Signup {...props} />
      </Provider>
    );
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
