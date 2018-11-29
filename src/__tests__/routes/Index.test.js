import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, configure } from "enzyme";
import Signup from "../../components/auth/signup";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Routes component", () => {
  beforeEach(() => {

  });

  it("should return index component for the root path", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/auth/signup"]}>
        <Signup />
      </MemoryRouter>
    );
    expect(wrapper.find(Signup)).toHaveLength(1);
  });
});
