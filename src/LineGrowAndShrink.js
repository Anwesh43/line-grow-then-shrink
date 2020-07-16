import React from 'react'
import {useStyle} from './hooks'

const LineGrowAndShrink = ({w, h, scale, onClick}) => {
    const {getLineStyle} = useStyle(w, h, scale)
    return <div onClick = {onClick}>
        <div style = {getLineStyle()}>
        </div>
    </div>
}

export default LineGrowAndShrink
