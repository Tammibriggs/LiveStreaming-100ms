import { useState } from "react"
import Message from "./Message"

function ChatNdParticipants() {

  const [selectedOption, setSelectedOption] = useState('chat')
  const [message, setMessage] = useState('')

  return (
    <div className='rightBox'>
      <div className='rightBox__head'>
        <span 
          onClick={() => setSelectedOption('chat')}
          className={selectedOption === 'chat' ? 'selected' : ''}
        >
          Chat
        </span>
        <span 
          className={selectedOption === 'participants' ? 'selected' : ''}
          onClick={() => setSelectedOption('participants')}
        >
          Participants
        </span>
      </div>
      <div className="rightBox__optionView">
        {selectedOption === 'chat' && 
          <>
            <div className="rightBox__chats">
              {/* Messages */}
              <Message />
            </div>
            <form name='send-message'>
              <input 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Write your message"
              />
            </form>
          </>
        }
        {selectedOption === 'participants' && 
          <div className="rightBox__participants">
            {/* Participants */}
          </div>
        }
      </div>
    </div>
  )
}

export default ChatNdParticipants