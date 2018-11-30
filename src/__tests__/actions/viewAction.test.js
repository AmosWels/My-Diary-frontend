import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { API_URLS } from "../../appUrls";
import axios from "axios";
import { getAllEntries } from "../../actions/diaries/diariesAction";

let store;
let mock;

describe("view all entries actions", () => {
  beforeEach(() => {
    configureMock();
  });
  it("view entries", () => {
    mock.onGet(API_URLS.CREATE_VIEW_ENTRIES).reply(200, {});
    getAllEntries({})(store.dispatch);
  });
  it("view entries error", () => {
    mock.onGet(API_URLS.CREATE_VIEW_ENTRIES).reply(400, {});
    getAllEntries({})(store.dispatch);
  });
});
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
