import React from 'react';

export type Hoc<TOuter = {}, TInner = TOuter> = (
  Component: React.ComponentType<TInner>
) => React.ComponentType<TOuter>;
export type ExtractTInner<T> = T extends Hoc<any, infer TInner>
  ? TInner
  : never;
