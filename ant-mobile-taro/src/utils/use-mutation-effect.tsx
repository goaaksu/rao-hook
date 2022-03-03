import { RefObject, useLayoutEffect, ComponentType } from 'react'
import { nextTick } from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'

// MutationObserver 不适用于小程序, useLayoutEffect + nextTick 模拟一下 (大概可以的)

export function useMutationEffect(
  effect: () => void,
  targetRef: RefObject<ComponentType<any>>
) {
  const fn = useMemoizedFn(effect)

  useLayoutEffect(() => {
    if (!targetRef.current) return
    nextTick(() => {
      fn()
    })
  }, [targetRef])
}