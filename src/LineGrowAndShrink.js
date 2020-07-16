import React from 'react'
import {useStyle} from './hooks'

const LineGrowAndShirnk = ({w, h, scale, onClick}) => {
    const {getLineStyle} = useStyle(w, h, scale)
    return <div>
        <div style = {getLineStyle()}>
        </div>
    </div>
}

export default LineGrowAndShrink
