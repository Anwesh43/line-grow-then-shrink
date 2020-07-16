import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

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

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const size = w / 8 
    const finalSize = w / 2
    const hSize = Math.min(w, h) / 20
    const fixedX = w / 2 - size
    const fixedY = h - hSize
    const position = 'absolute'
    const background = '#3F51B5'
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    return {
        getLineStyle() {
            const wFinal = (finalSize - size) * sf1 - (finalSize - size) * sf2
            const left = `${fixedX - wFinal}px`
            const top = `${fixedY - (fixedY) * sf}px`
            const height = `${hSize}px`
            const width = `${(size + wFinal) * 2}px`
            return {position, left, top, width, height, background}
        }
    }
}