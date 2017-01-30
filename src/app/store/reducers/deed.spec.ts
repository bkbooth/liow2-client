import { Deed } from '../models';
import * as deed from '../actions/deed';
import * as fromDeed from './deed';

describe(`deed reducer`, () => {
  const initialState: fromDeed.State = {
    isLoading: false,
    isLoaded: false,
    deeds: [],
    current: null,
  };

  it(`should set isLoading to true with FIND action`, () => {
    const state = fromDeed.reducer(initialState, new deed.FindAction());
    expect(state).not.toBe(initialState);
    expect(state.isLoading).toBe(true);
  });

  it(`should set deeds to payload with FIND_SUCCESS action`, () => {
    const payload = [];
    const state = fromDeed.reducer(initialState, new deed.FindSuccessAction(payload));
    expect(state).not.toBe(initialState);
    expect(state.isLoading).toBe(false);
    expect(state.isLoaded).toBe(true);
    expect(state.deeds).toBe(payload);
  });

  it(`should set isLoading to false with FIND_FAIL action`, () => {
    const loadingState = Object.assign({}, initialState, { isLoading: true });
    const state = fromDeed.reducer(loadingState, new deed.FindFailAction(new Error()));
    expect(state).not.toBe(loadingState);
    expect(state.isLoading).toBe(false);
  });

  it(`should set current deed with SET_CURRENT action`, () => {
    const currentDeed = <Deed>{};
    const state = fromDeed.reducer(initialState, new deed.SetCurrentAction(currentDeed));
    expect(state).not.toBe(initialState);
    expect(state.current).toBe(currentDeed);
  });
});