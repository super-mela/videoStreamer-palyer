import React, { useEffect, useState } from 'react'
import Video from './video'
import videos from '../data/videos.json'
import axios from 'axios'
import StreamView from './streamViewer'

function VideoList() {
    const [videoFile, setVideoFile] = useState([])
    const [showVideo, setShowVideo] = useState(false)
    const [showStream, setShowStream] = useState(false)
    const [playVideo, setPlayVideo] = useState('')


    useEffect(() => {
        setVideoFile(videos.videoData)
    }, [])

    // window.onload = () => {
    //     document.getElementById('my-view').onclick = () => {
    //         setShowVideo(false)
    //         setShowBroadcast(false)
    //         setShowStream(true)
    //         init();
    //     }
    // }

    // async function init() {
    //     const peer = createPeer();
    //     peer.addTransceiver("video", { direction: "recvonly" });
    //     peer.addTransceiver("audio", { direction: "recvonly" })
    // }

    // function createPeer() {
    //     const peer = new RTCPeerConnection({
    //         iceServers: [
    //             {
    //                 urls: "stun:stun.stunprotocol.org"
    //             }
    //         ]
    //     });
    //     peer.ontrack = handleTrackEvent;
    //     peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer);

    //     return peer;
    // }

    // async function handleNegotiationNeededEvent(peer) {
    //     const offer = await peer.createOffer();
    //     await peer.setLocalDescription(offer);
    //     const payload = {
    //         sdp: peer.localDescription
    //     };

    //     const { data } = await axios.post('http://localhost:4001/consumer', payload);
    //     const desc = new RTCSessionDescription(data.sdp);
    //     peer.setRemoteDescription(desc).catch(e => console.log(e));
    // }

    // function handleTrackEvent(e) {
    //     console.log(e.streams[0])
    //     document.getElementById("stream_video").srcObject = e.streams[0];
    // };


    return (
        <div className='w-5/6 ml-auto'>
            <StreamView setShowVideo={setShowVideo} showStream={showStream} setShowStream={setShowStream} />
            {showVideo ?
                <video src={playVideo} alt="Stream Video" controls autoPlay className='w-screen h-[30%] px-5 pt-2 z-0 rounded' />
                : null}
            <div className='p-4 grid grid-cols-4 gap-2 '>
                {videoFile.map((item, i) => (
                    <Video key={i} data={item} setShowVideo={setShowVideo} setPlayVideo={setPlayVideo} setShowStream={setShowStream} num={i} />
                ))}
            </div>
        </div>
    )
}

export default VideoList

