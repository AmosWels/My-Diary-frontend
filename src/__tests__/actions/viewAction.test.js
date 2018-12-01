import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { API_URLS, BASE_URL } from "../../appUrls";
import axios from "axios";

import { getAllEntries, createEntryAction, deleteAnEntry } from "../../actions/diaries/diariesAction";

let store;
let mock;
let id = 1;

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
  it("create entries ", () => {
    mock.onGet(API_URLS.CREATE_VIEW_ENTRIES).reply(201, {});
    createEntryAction({})(store.dispatch);
  });
  it("create entries fail", () => {
    mock.onGet(API_URLS.CREATE_VIEW_ENTRIES).reply(401, {});
    createEntryAction({})(store.dispatch);
  });
  it("delete entries ", () => {
    mock.onGet(BASE_URL + `/api/v1/entries/${id}`).reply(200, {});
    deleteAnEntry({})(store.dispatch);
  });
  it("delete entries fail", () => {
    mock.onGet(BASE_URL + `/api/v1/entries/${id}`).reply(400, {});
    deleteAnEntry({})(store.dispatch);
  });
  it("modify entries ", () => {
    mock.onPut(BASE_URL + `/api/v1/entries/${id}`).reply(200, {});
    deleteAnEntry({})(store.dispatch);
  });
  it("modify entries failure", () => {
    mock.onPut(BASE_URL + `/api/v1/entries/${id}`).reply(400, {});
    deleteAnEntry({})(store.dispatch);
  });
});
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}
