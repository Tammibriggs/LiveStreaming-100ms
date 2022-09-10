import { useVideo } from "@100mslive/react-sdk";

function VideoTile({ peer, peers }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack
  })

  const numberOfBroadCasters = () => {
    const broadcasters = peers.filter((peer) => {
      return peer.roleName === 'broadcaster'
    })
    return broadcasters.length
  }

  return (
    <video
      ref={videoRef}
      className={numberOfBroadCasters() >= 2 ? 'video' : ''}
      autoPlay
      muted
      playsInline
    />
  )
}

export default VideoTile