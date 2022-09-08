import { useEffect, useRef } from 'react'

function HlsView({ hlsUrl }) {
    const videoRef = useRef(null)

    return <video ref={videoRef} autoPlay controls></video>;
}

export default HlsView