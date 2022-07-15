import React from 'react'

function ItemSnonAfrica(props) {
    return (
        <div> <div className='menus flex justify-start items-center py-2 px-2 hover:bg-gray-400 hover:cursor-pointer'>
            <div className='img-yt'>{props.imge}</div>
            <h1 className='mx-4'>{props.title}</h1>

        </div></div>
    )
}

export default ItemSnonAfrica