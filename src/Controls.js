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

function Controls() {

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
      <Button 
        variant="contained"
        disableElevation
      >
        <PodcastsOutlined /> Go Live 
      </Button>
    </div>
  )
}

export default Controls