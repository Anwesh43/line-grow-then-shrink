import {useState, useEffect} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            var currScale = scale 
            if (!animated) {
              const interval = setInterval(() => {
                currScale += scGap 
                setScale(currScale)
                if (currScale > 1) {
                  setScale(0)
                  clearInterval(interval)
                  setAnimated(false)
                }
              }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {
                
            }
        }
    })
    return {
        w, 
        h
    }
}