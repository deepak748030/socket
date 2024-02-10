import React from 'react'
import { useEffect } from 'react';
import socketIO from 'socket.io-client'
const ENDPOINT = 'http://localhost:3000/';


const App = () => {
  const socket = socketIO(ENDPOINT, { transports: ["websocket"] })

  useEffect(() => {
    socket.on("connected", () => {
      console.log(`connected to ${socket.id}`)
    })
    return socket.off("connect")
  }, [socket])

  return (
    <div>socket hello bhai</div>
  )
}

export default App