"use client"

import { useState } from "react"
import { Send, Bot, User, CornerDownLeft } from "lucide-react"

type Message = {
  id: string
  role: "ai" | "user"
  content: string
}

const INITIAL_MESSAGES: Message[] = [
  { id: "1", role: "ai", content: "Hi! I'm your AI Career Coach. How can I help you today? I can review your skills, suggest career paths, or help you prepare for an interview." },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: "That sounds like a great plan. Based on your profile, I'd recommend focusing on building projects that demonstrate those specific skills. Would you like me to suggest some project ideas?"
      }
      setMessages(prev => [...prev, aiMsg])
    }, 1000)
  }

  return (
    <div className="container max-w-4xl py-6 h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">AI Career Coach</h1>
        <p className="text-muted-foreground text-sm">Ask for career advice, resume tips, or interview prep.</p>
      </div>

      <div className="flex-1 border rounded-xl bg-card overflow-hidden flex flex-col shadow-sm">

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.role === "ai" ? "" : "flex-row-reverse"}`}>
              <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.role === "ai" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                {msg.role === "ai" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === "ai" ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-muted/30 border-t">
          <form onSubmit={handleSubmit} className="relative flex items-end w-full overflow-hidden rounded-xl border bg-background focus-within:ring-1 focus-within:ring-ring">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[60px] w-full resize-none bg-transparent px-4 py-4 text-sm focus:outline-none"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div className="flex p-2 items-center">
              <button
                type="submit"
                disabled={!input.trim()}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </button>
            </div>
          </form>
          <div className="mt-2 text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
            Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><CornerDownLeft className="h-3 w-3" /> Return</kbd> to send
          </div>
        </div>
      </div>
    </div>
  )
}