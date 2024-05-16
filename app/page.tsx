"use client";
import Groq from "groq-sdk";
import { useState } from "react";
import { SendChat } from "@/app/chat/_chat"


export default function Home() {
  const [userInput, setUserInput] = useState("");
   const [userOutput, setUseroutput] = useState("");

  const handleSendMessage = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!userInput) {
      return; // Prevent sending empty messages
    }

    await SendChat(userInput);
    setUserInput("");
    setUseroutput(await SendChat(userInput));
  };

  return (
    <div className="chat-container flex h-screen">
      <div className="chat-history fixed bg-base-200 w-1/5 overflow-auto p-4">
        {/* Chat history content here */}
      </div>
      <div className="chat-input flex-grow h-full relative">
        <p>{userOutput}</p>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            className="absolute bottom-0 left-0 input input-bordered w-full"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit" className="hidden">
            Send
          </button>{" "}
        </form>
      </div>
    </div>
  );
}
