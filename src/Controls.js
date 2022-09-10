import {
  VideocamOutlined,
  VideocamOffOutlined,
  MicNoneOutlined,
  MicOffOutlined,
  LogoutOutlined,
  PodcastsOutlined,
  StopCircleOutlined
} from '@mui/icons-material';
import { IconButton, Button } from '@mui/material';
import { selectHLSState, useHMSActions, useHMSStore } from '@100mslive/react-sdk'

function Controls() {

  const hmsActions = useHMSActions()
  const hlsState = useHMSStore(selectHLSState)

  const startHLSStreaming = async () => {
    try {
      await hmsActions.startHLSStreaming()
    } catch (err) {
        alert(`failed to start hls ${err}`)
    }
  }

  const stopHLSStreaming = async () => { 
    try {
      await hmsActions.stopHLSStreaming()
    } catch (err) {
        alert(`failed to stop hls ${err}`)
    }
  }

  return (
    <div className='controls'>
      <IconButton>
        <MicOffOutlined />
      </IconButton>

      <IconButton>
        <VideocamOffOutlined />
      </IconButton>

      <Button 
        variant="contained" 
        disableElevation
        className='leave'
      >
        <LogoutOutlined /> Leave Room
      </Button>

      {/* HLS stream button */}

      {hlsState.running
        ? <Button 
            variant="contained" 
            disableElevation
            className='leave'
            onClick={stopHLSStreaming}
          >
            <StopCircleOutlined /> Stop Streaming
          </Button>
        : <Button 
            variant="contained"
            disableElevation
            onClick={startHLSStreaming}
          >
            <PodcastsOutlined /> Go Live 
          </Button>
      }
    </div>
  )
}

export default Controls