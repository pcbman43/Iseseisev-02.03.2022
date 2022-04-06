/**
 * This module provides a system for dependendency injection of hooks (and components, if you really want to).
 *
 * This is achieved by three parts:
 * 1. Wrap the hook definition inside `injectableHook()` -- this magically replaces the hook with mocked implementation.
 *    (alternatively one can call `useInject(hook)` for substitution).
 * 2. `const hookMock = defineMock(hook, mockFunc)` defines the pairing of original hook and a replacement one.
 * 3. `<Inject use={hook}>` uses the information from (2) and applies it to callers that use (1).
 */
import React, {createContext, useContext} from 'react';

type InjectData = Map<Function, Function>;
export type MockData<T extends Function> = {
  original: T;
  mock: T;
};

const injectDefault: InjectData = new Map();

const InjectContext = createContext(injectDefault);

type Injectable<T extends Function> = T & {originalHook: T};

/**
 * Returns a wrapper of a hook that calls `useInject()` on *itself* -- explicit call to `useInject()` is not needed.
 *
 * https://stackoverflow.com/a/41853194/177663  - add properties to functions type-safely
 */
export const injectableHook = <F extends Function>(hook: F): Injectable<F> => {
  // Define a wrapper for 'hook'
  // I tried doing this type-safely but failed -- it would break type arguments of useEnhancedTable<*>
  // (see https://stackoverflow.com/a/54946767/177663)
  const useWrapper = (function (this: any) {
    return useInject(hook).apply(this, arguments);
  } as unknown) as F;
  return Object.assign(useWrapper, {originalHook: hook});
};

/**
 * Use in components that want to support dependency injection. Returns the implementation provided by the closest
 * parent <Inject> component. If an implementation was not provided, returns the original function unchanged.
 *
 * Code without injection:
 *   const {dataCallback} = useData(args);
 * Code after:
 *   const {dataCallback} = useInject(useData)(args);
 */
export const useInject = <T extends Function>(original: T): T => {
  const injections = useContext(InjectContext);
  if (injections.has(original)) {
    // This cast is type-safe, because `original` and `mock` were required to have the same type in `defineMock()`.
    // Type-safety not trivial to achieve with native TS: https://stackoverflow.com/a/51573704/177663
    return injections.get(original) as T;
  }
  return original;
};

/**
 * Define a mock for a function.
 *
 * Original hook:
 *   const useDataService = () => 'returned by original hook';
 * Mock:
 *   const useDataMock = defineMock(useDataService, () => 'fake data');
 *
 * This function ensures that the original and replacement function have the same type.
 */
export const defineMock = <T extends Function>(hook: T | Injectable<T>, mock: T): MockData<T> => {
  // If hook was defined with `injectableHook()`, we un-wrap the wrapper.
  const original = 'originalHook' in hook ? hook.originalHook : hook;
  return {original, mock};
};

type InjectProps = {
  use: MockData<any> | MockData<any>[];
};

/**
 * Sets injection context for `useInject`.
 *
 * Example:
 *   <Inject use={useDataMock}>
 *     <UsesBlaHook />
 *   </Inject>
 *
 * `defineMock()` can also be used inline:
 *   <Inject use={defineMock(useDataService, () => 'fake data')}>
 */
export const Inject: React.FC<InjectProps> = ({use, children}) => {
  // In the future we may want to merge this with upper InjectContext?
  let map: InjectData;
  if (Array.isArray(use)) {
    map = new Map(use.map(mock => [mock.original, mock.mock]));
  } else {
    map = new Map([[use.original, use.mock]]);
  }

  return <InjectContext.Provider value={map}>{children}</InjectContext.Provider>;
};
