import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { API_URLS } from "../../appUrls";
import axios from "axios";
import { signupAction } from "../../actions/auth/signupAction";

let store;
let mock;

describe("signup actions", () => {
  beforeEach(() => {
    configureMock();
  });
  it("sign up", () => {
    mock.onPost(API_URLS.SIGNUP_USER).reply(201, {});
    signupAction({})(store.dispatch);
  });
  it("sign up error", () => {
    mock.onPost(API_URLS.SIGNUP_USER).reply(400, {});
    signupAction({})(store.dispatch);
  });
});
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
