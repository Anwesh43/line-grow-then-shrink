import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import LineAndGrowShrink from './LineGrowAndShrink'

const LineAndGrowShrinkContainer = ({props}) => {
    const {scale, start} = useAnimatedScale(0.01, 30)
    const {w, h} = useDimension()
    return <div>
        <LineAndGrowShrink w = {w} h = {h} scale = {scale} onClick = {start}></LineAndGrowShrink>
    </div>
}
export default LineAndGrowShrinkContainer