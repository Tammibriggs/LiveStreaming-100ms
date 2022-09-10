import { selectHLSState, useHMSStore } from '@100mslive/react-sdk'
import Hls from 'hls.js'
import { useEffect, useRef } from 'react'

function HlsView() {
    const videoRef = useRef(null)
    const hlsState = useHMSStore(selectHLSState)
    const hlsUrl = hlsState.variants[0]?.url
    useEffect(() => {
        if (videoRef.current && hlsUrl) {
            const browserHasNativeHLSSupport = videoRef.current.canPlayType(
                'application/vnd.apple.mpegurl'
            );
            if (Hls.isSupported()) {
                let hls = new Hls()
                hls.loadSource(hlsUrl)
                hls.attachMedia(videoRef.current)
            }
            else if (browserHasNativeHLSSupport) {
                videoRef.current.src = hlsUrl
            }
        }
    }, [hlsUrl])
    return <video ref={videoRef} autoPlay controls></video>;
}

export default HlsView