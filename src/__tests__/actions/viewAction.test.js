import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { API_URLS, BASE_URL } from "../../appUrls";
import entriesReducer from "../../reducers/entriesReducer/entryReducer";
import axios from "axios";

import {
  getAllEntries,
  createEntryAction,
  deleteAnEntry,
  updateEntryAction
} from "../../actions/diaries/diariesAction";

let store;
let mock;
let id = 1;
const data = {};

describe("view all entries actions", () => {
  beforeEach(() => {
    configureMock();
  });
  it("view entries", () => {
    mock.onGet(API_URLS.CREATE_VIEW_ENTRIES).reply(200, {});
    getAllEntries({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("view entries error", () => {
    mock.onGet(API_URLS.CREATE_VIEW_ENTRIES).reply(400, {});
    getAllEntries({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("create entries ", () => {
    mock.onPost(API_URLS.CREATE_VIEW_ENTRIES).reply(201, {});
    createEntryAction({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("create entries fail", () => {
    mock.onPost(API_URLS.CREATE_VIEW_ENTRIES).reply(401, {});
    createEntryAction({})(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("delete entries ", () => {
    mock.onDelete(BASE_URL + `/api/v1/entries/${id}`).reply(200, {});
    deleteAnEntry(id)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("delete entries fail", () => {
    mock.onDelete(BASE_URL + `/api/v1/entries/${id}`).reply(400, {});
    deleteAnEntry(id)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("modify entries ", () => {
    mock.onPut(BASE_URL + `/api/v1/entries/${id}`).reply(200, {});
    updateEntryAction(id, data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
  it("modify entries failure", () => {
    mock.onPut(BASE_URL + `/api/v1/entries/${id}`).reply(400, {});
    updateEntryAction(id, data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  });
});
function configureMock() {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
}

describe("entries reducer ", () => {
  const initialState = {
    entries: [],
    entry: {},
    deleted: {},
    modify: {}
  };
  const action = type => {
    return {
      type: type,
      payload: []
    };
  };
  it("new entry to be added", () => {
    expect(entriesReducer(initialState, action("NEW_ENTRY"))).toEqual({
      deleted: {},
      entries: [],
      entry: [],
      modify: {}
    });
  });
  it("all entries to be returned", () => {
    expect(entriesReducer({}, action("VIEW_ENTRIES"))).toEqual({ entries: [] });
  });
  it("entry to be fetched", () => {
    expect(entriesReducer({}, action("VIEW_ONE_ENTRY"))).toEqual({
      oneentry: []
    });
  });
  it("entry to be deleted", () => {
    expect(entriesReducer({}, action("DELETE_ONE_ENTRY"))).toEqual({
      deleted: []
    });
  });
  it("entry to be modified", () => {
    expect(entriesReducer({}, action("MODIFY_ENTRY"))).toEqual({ modify: [] });
  });
});
