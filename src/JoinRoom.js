import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinRoom() {
  const ENDPOINT = process.env.REACT_APP_TOKEN_ENDPOINT
  const ROOM_ID = process.env.REACT_APP_ROOM_ID

  const [username, setUsername] = useState("")
  const [selectedRole, setSelectedRole] = useState("broadcaster")
  const hmsActions = useHMSActions()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${ENDPOINT}api/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id: `${Date.now()}`,
        role: selectedRole, //broadcaster, hls-viewer
        type: "app",
        room_id: ROOM_ID,
      }),
    })
    const { token } = await response.json()
    // Joining the room
    hmsActions.join({
      userName: username,
      authToken: token,
    })
  }

  return (
    <form className="join" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select
        type="text"
        required
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        placeholder='Select Role'
      >
        <option>broadcaster</option>
        <option>hls-viewer</option>
      </select>
      <button>Join</button>
    </form>
  );
}

export default JoinRoom;