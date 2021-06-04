import { noop } from 'lodash'
import React from 'react'
import { Hoc } from './types'

export function createHocTestComponent<TOuter = any, TInner = any>(
  hoc: Hoc<TOuter, TInner>,
  expectations: (props: TInner) => any = noop
): React.ComponentType<TOuter> {
  return hoc(props => {
    expectations(props)
    return null
  })
}
