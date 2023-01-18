import { useEffect } from 'react'

export function useFillRemainingHeight(elementRef) {
  useEffect(() => {
    if (elementRef.current) {
      const top = elementRef.current?.getBoundingClientRect().top
      elementRef.current.style.height = `calc(100vh - ${top}px)`
    }
  })
}
