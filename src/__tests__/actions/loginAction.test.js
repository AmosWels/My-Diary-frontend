import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { API_URLS } from "../../appUrls";
import axios from "axios";
import userLogin from "../../reducers/authReducer/loginReducer";
import { loginAction } from "../../actions/auth/loginAction";

let store;
let mock;

describe("login actions", () => {
  beforeEach(() => {
    configureMock();
  });
  it("login user", () => {
    mock.onPost(API_URLS.LOGIN_USER).reply(201, {});
    loginAction({})(store.dispatch);
  });
  it("login user error", () => {
    mock.onPost(API_URLS.LOGIN_USER).reply(403, {});
    loginAction({})(store.dispatch);
  });
});
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}

describe("test login reducer", () => {
  const initialState = {
    user: {},
    isLoggedIn: false
  };
  beforeEach(() => {
    configureMock();
  });
  it("it should login user", () => {
    expect(
      userLogin(initialState, {
        type: "LOGIN_ACTION",
        payload: {}
      })
    ).toEqual({
      user: {},
      isLoggedIn: true
    });
  });
});
