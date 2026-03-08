import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return isMobile
}

export const getHoverHandlers = (setHovered: Dispatch<SetStateAction<boolean>>) => ({
  onMouseEnter: () => setHovered(true),
  onMouseLeave: () => setHovered(false),
})
