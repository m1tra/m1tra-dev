'use client'

import React, { useState } from 'react'
import Card from '../brutal-ui/card'
import BrutalInput from '../brutal-ui/input'
import BrutalButton from '../brutal-ui/button'
import { ArrowRight } from 'lucide-react'

interface IMessage {
  user: string,
  time: string,
  message: string,
}

export default function TeamChat() {
  const [message, setMessage] = useState<string>("")

  const [messages, setMessages] = useState<IMessage[]>([
    { user: "ALEX", message: "NEW DESIGN IS FIRE! 🔥", time: "2m" },
    { user: "SARAH", message: "DEPLOY READY?", time: "5m" },
    { user: "MIKE", message: "BRUTAL STYLE APPROVED", time: "8m" },
  ])

  const sendMessage = () => {
    if (message.trim().length > 0) {
      setMessages(prev => [
        { user: "YOU", message: message.toUpperCase(), time: "now" },
        ...prev
      ])
      setMessage("")
    }
  }

  return (
    <Card className="bg-violet-400 flex flex-col gap-3 justify-between p-10 aspect-square w-full">
      <h3 className="font-extrabold uppercase text-2xl">Team chat</h3>
      
      <div className="flex flex-col gap-3 overflow-y-auto max-h-66">
        {messages.map((msg, index) => (
          <Card key={index} className="p-3 flex justify-between bg-white">
            <div className="text-base flex justify-between flex-col">
              <h4>{msg.user}</h4>
              <p>{msg.message}</p>
            </div>
            <span className="text-sm">{msg.time}</span>
          </Card>
        ))}
      </div>

      <div className="flex gap-2">
        <BrutalInput
          placeholder="type message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-white"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <BrutalButton className="rounded-sm" onClick={sendMessage}>
          <ArrowRight strokeWidth={4} />
        </BrutalButton>
      </div>
    </Card>
  )
}
