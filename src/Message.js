import { selectLocalPeer, useHMSStore } from '@100mslive/react-sdk'

function Message({message}) {
  const localPeer = useHMSStore(selectLocalPeer)

  return (
    <div 
      className={`message ${message.senderUserId === localPeer.customerUserId && 'myMessage'}`}
    >
      <span>{message.senderName}</span>
      <p>{message.message}</p>
    </div>
  )
}

export default Message