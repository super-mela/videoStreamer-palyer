import React from 'react'
import axios from 'axios'

function Broadcast() {
    window.onload = () => {
        document.getElementById('my-button').onclick = () => {
            init();
        }
    }

    async function init() {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById("video").srcObject = stream;
        const peer = createPeer();
        stream.getTracks().forEach(track => peer.addTrack(track, stream));
    }


    function createPeer() {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        });
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer);

        return peer;
    }

    async function handleNegotiationNeededEvent(peer) {
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        const payload = {
            sdp: peer.localDescription
        };

        const { data } = await axios.post('http://localhost:4001/broadcast', payload);
        const desc = new RTCSessionDescription(data.sdp);
        peer.setRemoteDescription(desc).catch(e => console.log(e));
    }
    return (
        <div className='p-5 w-5/6 ml-auto'>
            <div className='flex justify-around '>
                <video autoPlay id="video" controls muted className='w-[75%] h-[30%] px-5 pt-2 z-0 rounded' />
                <div>
                    <div className='py-1'>
                        <img src='https://cdn.one.org/africa/wp-content/uploads/2022/04/04143347/AJN_2022_share_1200x628_1-640x335.jpg' alt='Thumbnail' className='w-80 rounded hover:p-2 hover:shadow-2xl hover: bg-inherit' />
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
                    <div className='py-1'>
                        <img src='https://cdn.one.org/africa/wp-content/uploads/2022/04/04143347/AJN_2022_share_1200x628_1-640x335.jpg' alt='Thumbnail' className='w-80 rounded hover:p-2 hover:shadow-2xl hover: bg-inherit' />
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
                    <div className='py-1'>
                        <img src='https://cdn.one.org/africa/wp-content/uploads/2022/04/04143347/AJN_2022_share_1200x628_1-640x335.jpg' alt='Thumbnail' className='w-80 rounded hover:p-2 hover:shadow-2xl hover: bg-inherit' />
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
                </div>
            </div>
            <div className='w-[75%]'>
                <div className='px-10 flex flex-col '>
                    <input type='text' placeholder={'Enter Tiltle'} className="border w-[90%] py-3 my-3" />
                    <textarea type={'text'} placeholder="Enter Deascription" className='border w-[90%] py-3 my-3' />
                </div>
                <button className='bg-green-400 py-2 px-4 rounded float-right'>Save</button>
            </div>
        </div>
    )
}

export default Broadcast



