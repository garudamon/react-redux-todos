import useLocalStorage from "../useLocalStorage";
import { renderHook, act } from "utils/test-utils";

const STORE_KEY = "item_key";
const initialState = { a: 1, b: 2 };

describe("useLocalStorage.ts test", () => {
  beforeEach(() => {
    localStorage.removeItem(STORE_KEY);
  });

  it("is callable", () => {
    const { result } = renderHook(() => useLocalStorage(STORE_KEY, "bar"));
    expect(result.current).toBeDefined();
  });

  it("returns the initialState", () => {
    const { result } = renderHook(() =>
      useLocalStorage(STORE_KEY, initialState)
    );
    expect(result.current[0]).toEqual(initialState);
  });

  it('returns a setValue function that can reset local storage', () => {
    const { result } = renderHook(() => useLocalStorage(STORE_KEY, initialState));
    const newValue = { a: 3, b: 10 };
    act(() => {
        result.current[1](JSON.stringify(newValue));
    });
    expect(result.current[0]).toEqual(JSON.stringify(newValue));
    expect(localStorage.getItem(STORE_KEY)).toEqual(JSON.stringify(newValue));
  });

  it('localStorage.getItem calls once', () => {
    // do not prepare the initial state on every render except the first
    const spyStorage = vi.spyOn(Storage.prototype, 'getItem');

    const { result } = renderHook(() => useLocalStorage(STORE_KEY, initialState));
    const newValue = { a: 2, b: 5 };
    act(() => {
      result.current[1](newValue);
    });
    expect(spyStorage).toHaveBeenCalledTimes(1);
    spyStorage.mockReset();
  });
});
