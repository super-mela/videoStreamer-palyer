import React from 'react'

function video() {
    return (
        <div className='py-1'>
            <img src='https://miro.medium.com/max/1024/1*h5UGPzaL1E4dIy_JWDrsAw.png' alt='Thumbnail' className='w-80 rounded' />
            <div className='title flex justify-space-between items-center'>
                <img src='./avatar.svg' alt='Avatar' className='w-12' />
                <h1>Learn React JS props and Tailwind</h1>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
            </div>
            <div className='infos mx-12'>
                <h1>Dev NB</h1>
                <span>2 K vue | il ya 14 hours</span>
            </div>
        </div>
    )
}

export default video