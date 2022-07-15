import React from 'react';
import axios from 'axios';

function StreamView({ setShowVideo, showStream, setShowStream }) {

    window.onload = () => {
        document.getElementById('my-view').onclick = () => {
            setShowVideo(false)
            setShowStream(true)
            init();
        }
    }

    async function init() {
        const peer = createPeer();
        peer.addTransceiver("video", { direction: "recvonly" });
        peer.addTransceiver("audio", { direction: "recvonly" })
    }

    function createPeer() {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        });
        peer.ontrack = handleTrackEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer);

        return peer;
    }

    async function handleNegotiationNeededEvent(peer) {
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        const payload = {
            sdp: peer.localDescription
        };

        const { data } = await axios.post('http://localhost:4001/consumer', payload);
        const desc = new RTCSessionDescription(data.sdp);
        peer.setRemoteDescription(desc).catch(e => console.log(e));
    }

    function handleTrackEvent(e) {
        document.getElementById("Live_Stream").srcObject = e.streams[0];
    };
    return (
        <div>
            {showStream ?
                <video autoplay id="Live_Stream" controls muted autoPlay className='w-screen h-[30%] px-5 pt-2 z-0 rounded' />
                : null}
        </div>
    )

}

export default StreamView