import { useEffect, useState } from "react"

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const HandleResize = () => { setInnerWidth(window.innerWidth) }

    window.addEventListener('resize', HandleResize)

    return () => {
      window.removeEventListener('resize', HandleResize)
    }
  },[])

  return innerWidth
}

export default useInnerWidth;