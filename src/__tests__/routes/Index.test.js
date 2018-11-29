import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, configure } from "enzyme";
import configureStore from "redux-mock-store";
import Signup from "../../components/auth/signup";
import Index from "../../components/auth/index";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const mockStore = configureStore([]);
let store;

describe("Routes component", () => {
  beforeEach(() => {
    const data = {
      user: {
        isLoggedIn: {Message:"Created Succesfully"}
      }
    };
    store = mockStore(data);
  });

  it("should return signup component for the registration", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/auth/signup"]}>
        <Signup />
      </MemoryRouter>
    );
    expect(wrapper.find(Signup)).toHaveLength(1);
  });

  it("should return index component for the root path", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]}>
        <Index />
      </MemoryRouter>
    );
    expect(wrapper.find(Index)).toHaveLength(1);
  });
});
