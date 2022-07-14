import React from 'react'
import Video from './video'

function videoList() {
    return (
        <div className='p-4 grid grid-cols-4 gap-2 w-5/6 ml-auto'>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    )
}

export default videoList